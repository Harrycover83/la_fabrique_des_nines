/**
 * API Route - Création de session Stripe Checkout
 * 
 * Cette route crée une session de paiement Stripe et renvoie l'URL de redirection.
 * 
 * Variables d'environnement requises:
 * - STRIPE_SECRET_KEY: Clé secrète Stripe
 * - NEXT_PUBLIC_SITE_URL: URL du site
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Le panier est vide' },
        { status: 400 }
      );
    }

    // Vérifier que la clé Stripe est configurée
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY n\'est pas configurée');
      return NextResponse.json(
        { error: 'Configuration Stripe manquante' },
        { status: 500 }
      );
    }

    // Initialiser Stripe avec la clé secrète
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia',
    });

    // URL de base du site
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Créer les line items pour Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.color ? `Couleur: ${item.color}` : undefined,
          // Note: Stripe nécessite des URLs absolues pour les images
          // Pour l'instant, on ne passe pas d'image
        },
        unit_amount: Math.round(item.price * 100), // Stripe utilise les centimes
      },
      quantity: item.quantity,
    }));

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/panier`,
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'LU', 'CH', 'MC'],
      },
      billing_address_collection: 'required',
      locale: 'fr',
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Erreur lors de la création de la session Stripe:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session de paiement' },
      { status: 500 }
    );
  }
}

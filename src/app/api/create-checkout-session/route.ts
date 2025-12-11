import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

/**
 * API Route pour créer une session Stripe Checkout
 */
export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Le panier est vide" },
        { status: 400 }
      );
    }

    // Initialiser Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2025-01-27.acacia",
    });

    // Créer les line items pour Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.product.name,
          description: item.selectedColor
            ? `Couleur: ${item.selectedColor}`
            : undefined,
          images: [
            `${process.env.NEXT_PUBLIC_SITE_URL}${item.product.image}`,
          ],
        },
        unit_amount: Math.round(item.product.price * 100), // Prix en centimes
      },
      quantity: item.quantity,
    }));

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/panier`,
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "CH", "LU", "MC"],
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Erreur Stripe:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la création de la session" },
      { status: 500 }
    );
  }
}

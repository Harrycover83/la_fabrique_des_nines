'use client';

/**
 * Page Contact
 * 
 * Formulaire de contact simple
 */

import { useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Pour l'instant, on log simplement le message
    // Dans une version future, on pourrait envoyer un email via une API
    console.log('Message de contact:', formData);
    
    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nom: '', email: '', message: '' });
      
      // Réinitialiser le message de confirmation après 5 secondes
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl font-bold text-text-primary mb-4 text-center">
          Contact
        </h1>
        <p className="text-text-secondary text-lg mb-12 text-center">
          Une question, une demande personnalisée ou simplement envie d&apos;échanger ? 
          N&apos;hésitez pas à nous contacter !
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">
              Nos coordonnées
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                  <a 
                    href="mailto:contact@lafabriquedesninnes.fr"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    contact@lafabriquedesninnes.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/la_fabrique_des_nines_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    @la_fabrique_des_nines_
                  </a>
                  <p className="text-text-secondary text-sm mt-1">
                    Suivez nos créations au quotidien !
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">Localisation</h3>
                  <p className="text-text-secondary">
                    Fait main en France 🇫🇷
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-primary/5 rounded-xl p-6">
              <h3 className="font-semibold text-text-primary mb-3">
                💡 Le saviez-vous ?
              </h3>
              <p className="text-text-secondary text-sm">
                Nous répondons généralement aux messages dans les 24-48 heures. 
                Pour les demandes de commandes personnalisées, n&apos;hésitez pas à nous 
                partager vos inspirations et vos envies !
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">
                Envoyez-nous un message
              </h2>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Merci pour votre message ! Nous vous répondrons très bientôt.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-text-primary mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    placeholder="Dites-nous tout..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

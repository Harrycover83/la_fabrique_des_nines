"use client";

import { useState } from "react";
import { Mail, Instagram, Send } from "lucide-react";

/**
 * Page Contact
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Pour l'instant, on simule l'envoi (vous pourrez connecter un vrai service plus tard)
    console.log("Message envoyé:", formData);
    
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-center">
          Contactez-nous
        </h1>
        <p className="text-text-secondary text-lg text-center mb-12">
          Une question ? Un projet personnalisé ? N'hésitez pas à nous écrire !
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>

              {isSubmitted && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg text-center">
                  ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
                </div>
              )}
            </form>
          </div>

          {/* Informations */}
          <div>
            <div className="bg-white rounded-xl p-6 mb-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Autres moyens de contact
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:contact@lafabriquedesnines.fr"
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@lafabriquedesnines.fr</span>
                </a>

                <a
                  href="https://www.instagram.com/la_fabrique_des_nines_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@la_fabrique_des_nines_</span>
                </a>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-xl p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Temps de réponse
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Nous nous efforçons de répondre à tous les messages dans les 24 à
                48 heures. Pour les demandes urgentes, n'hésitez pas à nous
                contacter directement sur Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, ReactNode } from 'react'
import { Coffee, ShoppingCart, Clipboard, BarChart, Utensils, Smartphone, Clock, MessageCircle, Check, ChevronRight, Star, Menu, X } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#FFF0F0]">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-[#FF6B6B]" />
            <h1 className="text-2xl font-bold text-[#FF6B6B]">SimmioFood</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#caracteristicas" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Características</a></li>
              <li><a href="#planes" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Planes</a></li>
              <li><a href="#testimonios" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Contacto</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex px-4 py-2 bg-white text-[#FF6B6B] border border-[#FF6B6B] rounded hover:bg-[#FFF0F0] transition-colors">
              Iniciar sesión
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#FF6B6B]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <nav>
            <ul className="space-y-2">
              <li><a href="#caracteristicas" className="block text-gray-600 hover:text-[#FF6B6B] transition-colors" onClick={() => setIsMenuOpen(false)}>Características</a></li>
              <li><a href="#planes" className="block text-gray-600 hover:text-[#FF6B6B] transition-colors" onClick={() => setIsMenuOpen(false)}>Planes</a></li>
              <li><a href="#testimonios" className="block text-gray-600 hover:text-[#FF6B6B] transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonios</a></li>
              <li><a href="#contacto" className="block text-gray-600 hover:text-[#FF6B6B] transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C8C] text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Revoluciona la Gestión de tu Restaurante
                </h2>
                <p className="text-xl mb-8 text-gray-100">
                  SimmioFood: La solución todo en uno que transformará tu negocio gastronómico
                </p>
                <button className="px-6 py-3 bg-white text-[#FF6B6B] rounded-md hover:bg-gray-100 transition-colors flex items-center">
                  Prueba Gratis por 14 Días
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full max-w-xs mx-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="SimmioFood Dashboard"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="caracteristicas" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShoppingCart className="h-10 w-10" />}
                title="Gestión Completa de Ventas"
                description="Maneja todos los tipos de ventas: en mesa, para llevar y a domicilio con facilidad. Integración con múltiples métodos de pago y sistemas de delivery."
              />
              <FeatureCard
                icon={<Clipboard className="h-10 w-10" />}
                title="Control de Inventario y Proveedores"
                description="Mantén un seguimiento en tiempo real de tu stock, gestiona las relaciones con proveedores y optimiza tus pedidos automáticamente."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10" />}
                title="Informes Completos y Análisis"
                description="Obtén insights valiosos con análisis detallados, informes personalizables y dashboards interactivos para tomar decisiones informadas."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FFF0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Por qué elegir SimmioFood?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-[#FF6B6B] p-3 rounded-full">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#FF6B6B]">Todo en Uno</h3>
                  <p className="text-gray-600">Una única plataforma para todas tus necesidades de gestión de restaurantes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-[#FF6B6B] p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#FF6B6B]">Fácil de Usar</h3>
                  <p className="text-gray-600">Interfaz intuitiva que no requiere conocimientos técnicos avanzados.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-[#FF6B6B] p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#FF6B6B]">Soporte 24/7</h3>
                  <p className="text-gray-600">Nuestro equipo de expertos está siempre disponible para ayudarte.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-[#FF6B6B] p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#FF6B6B]">Actualizaciones Constantes</h3>
                  <p className="text-gray-600">Mejoras continuas basadas en las necesidades de nuestros clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Planes que se Adaptan a tu Negocio</h2>
            <div className="flex justify-center items-center mb-8 space-x-4">
              <span className={`text-sm ${isAnnual ? 'text-gray-500' : 'text-gray-900 font-semibold'}`}>Mensual</span>
              <button
                className={`w-12 h-6 rounded-full p-1 ${isAnnual ? 'bg-[#FF6B6B]' : 'bg-gray-300'} transition-colors duration-300 ease-in-out`}
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-6' : ''}`} />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>Anual (20% de descuento)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PlanCard
                title="Básico"
                price={isAnnual ? "$39.99" : "$49.99"}
                features={[
                  "Gestión de ventas",
                  "Control de inventario básico",
                  "Informes mensuales",
                  "Soporte por email"
                ]}
              />
              <PlanCard
                title="Pro"
                price={isAnnual ? "$79.99" : "$99.99"}
                features={[
                  "Todo lo del plan Básico",
                  "Gestión avanzada de inventario",
                  "Informes personalizados",
                  "Integración con apps de delivery",
                  "Soporte prioritario"
                ]}
                highlighted={true}
              />
              <PlanCard
                title="Enterprise"
                price="Personalizado"
                features={[
                  "Todo lo del plan Pro",
                  "API personalizada",
                  "Onboarding dedicado",
                  "Gerente de cuenta asignado",
                  "Soporte 24/7"
                ]}
              />
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-16 bg-[#FFF0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Lo que Dicen Nuestros Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="María González"
                role="Dueña de Restaurante"
                content="SimmioFood ha transformado completamente la forma en que manejamos nuestro restaurante. La eficiencia ha aumentado y nuestros clientes están más satisfechos que nunca."
              />
              <TestimonialCard
                name="Carlos Rodríguez"
                role="Gerente de Operaciones"
                content="La integración con apps de delivery y el control de inventario en tiempo real nos han ahorrado horas de trabajo. ¡Altamente recomendado!"
              />
              <TestimonialCard
                name="Ana Martínez"
                role="Chef Ejecutiva"
                content="Como chef, aprecio mucho la facilidad con la que puedo gestionar el inventario y crear nuevos platos. SimmioFood hace que mi trabajo sea mucho más eficiente."
              />
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Listo para Revolucionar tu Restaurante?</h2>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Solicita una Demo</h3>
              <p className="text-gray-600  mb-6">Completa el formulario y nos pondremos en contacto contigo.</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF6B6B] focus:border-[#FF6B6B]" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF6B6B] focus:border-[#FF6B6B]" placeholder="tu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF6B6B] focus:border-[#FF6B6B]" placeholder="Tu número de teléfono" />
                </div>
                <div className="flex justify-end space-x-4">
                  <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]">
                    Cancelar
                  </button>
                  <button type="submit" className="px-4 py-2 bg-[#FF6B6B] text-white rounded-md hover:bg-[#FF8C8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]">
                    Solicitar Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SimmioFood</h3>
              <p className="text-gray-400">Transformando la gestión de restaurantes en América Latina</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#caracteristicas" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
                <li><a href="#planes" className="text-gray-400 hover:text-white transition-colors">Planes</a></li>
                <li><a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suscríbete a nuestro boletín</h4>
              <form className="flex flex-col space-y-2">
                <input type="email" placeholder="tu@email.com" className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]" />
                <button type="submit" className="px-4 py-2 bg-[#FF6B6B] text-white rounded-md hover:bg-[#FF8C8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]">
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 SimmioFood. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-[#FF6B6B]">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

function PlanCard({ title, price, features, highlighted = false }: PlanCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${highlighted ? 'border-2 border-[#FF6B6B] scale-105' : ''}`}>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <p className="text-center mb-6">
          <span className="text-3xl font-bold text-[#FF6B6B]">{price}</span>
          {price !== "Personalizado" && <span className="text-sm text-gray-500">/mes</span>}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-2 rounded-md ${highlighted ? 'bg-[#FF6B6B] text-white hover:bg-[#FF8C8C]' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}>
          {title === 'Enterprise' ? 'Contáctanos' : 'Comenzar'}
        </button>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
        <Star className="h-5 w-5 text-yellow-400" />
      </div>
      <p className="mb-4 text-gray-600 italic">{content}</p>
      <div className="font-semibold text-gray-800">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  )
}
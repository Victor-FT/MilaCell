import React from 'react';
import { PlayIcon } from './Play';
import { Wrench, UserCheck, ShieldCheck, Package } from 'lucide-react';
const AboutSection: React.FC = () => {
  return (
    <section id="About" className="pb-40 pt-60 max-w-[100%] md:max-w-6xl mx-auto px-12 md:px-4">
      <div className="text-center relative">
        <div className='absolute bottom-[90%] sm:bottom-[85%] md:bottom-[70%] left-0 right-0 flex items-center justify-center'>        
          <h2
            className="inline-block text-[6.5rem] sm:text-[10rem] md:text-[14rem] font-bold mb-4 uppercase font-['Roboto_Condensed']"
            style={{
              color: '#69696900',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#00000037',
              lineHeight: '1',
            }}
            >
            SOBRE
          </h2>
        </div>
        <div className='relative z-10'>      
          <h3
            className="text-4xl sm:text-7xl font-bold mb-6 text-gray-800 font-['Roboto_Condensed']"
            style={{
              letterSpacing: '-0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Transformando Seu Aparelho em Novo, Sempre!
          </h3>
        </div>
        <PlayIcon size={300} color="#fe090a"  className='hidden xl:block absolute -top-10 -left-72 z-0' 
         />  
        <PlayIcon size={300} color="#fe090a"  className='hidden xl:block absolute -top-10 -right-72 z-0'  style={{
            transform: 'rotate(180deg)'
          
        }}/>  
        
        <PlayIcon size={100} color="#fe090a"  className='xl:hidden absolute top-[100%] -left-[9%] md:top-[105%] sm:-left-[-10%] md:-left-[5%] z-0' 
         />  
        <PlayIcon size={100} color="#fe090a"  className='xl:hidden absolute top-[100%] -right-[9%] md:top-[105%] sm:-right-[-10%] md:-right-[5%] z-0'  style={{
            transform: 'rotate(180deg)'
          
        }}/>
        <p className="text-xl sm:text-3xl text-gray-600 mb-8 z-10">
          Com anos de experiência, a Milacell é especializada em conserto de celulares e eletrônicos, oferecendo 
          soluções rápidas e eficientes para você. Desde troca de telas, reparo de componentes internos, até a 
          aplicação de películas e venda de acessórios como capinhas e carregadores, garantimos o melhor atendimento e qualidade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Wrench size={60} color="#000" /> {/* Ícone de reparo */}
          <h3 className="text-xl font-semibold mt-4">Reparos rápidos e eficientes</h3>
        </div>
        <div className="flex flex-col items-center">
          <UserCheck size={60} color="#000" /> {/* Ícone de equipe especializada */}
          <h3 className="text-xl font-semibold mt-4">Equipe especializada</h3>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck size={60} color="#000" /> {/* Ícone de garantia de qualidade */}
          <h3 className="text-xl font-semibold mt-4">Garantia de qualidade</h3>
        </div>
        <div className="flex flex-col items-center">
          <Package size={60} color="#000" /> {/* Ícone de variedade de acessórios */}
          <h3 className="text-xl font-semibold mt-4">Ampla variedade de acessórios</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

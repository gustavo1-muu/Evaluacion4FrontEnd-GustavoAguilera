import React, { useState, useEffect } from "react";
import CreateRecipeForm from './CreateRecipeForm';
import RecipeList  from '../components/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../style/recipePage.css';

import sushi from '../fotos/sushi.jpg'
import curry from '../fotos/curry.jpg'
import sopa from '../fotos/sopa-de-miso.jpg'
import pad from '../fotos/Phat-Thai.jpg'
import sashimi from '../fotos/sashimi.jpg'
import tacos from '../fotos/tacos.jpg'
import ceviche from '../fotos/ceviche.jpg'
import empanada from '../fotos/empanada.jpg'
import enchiladas from '../fotos/enchiladas.jpg'
import arepas from '../fotos/Arepas.jpg'
import paella from '../fotos/paella.jpg'
import moussaka from '../fotos/moussaka.jpg'
import fish from '../fotos/fish-chips.jpg'
import rissoto from '../fotos/risotto.jpg'
import goulash from '../fotos/goulash.jpg'
import tiramisu from '../fotos/tiramisu.jpg'
import fajitas from '../fotos/fajitas.jpg'
import pato from '../fotos/pato.jpg'
import shawarma from '../fotos/shawarma.jpg'
import borscht from '../fotos/Borscht.jpg'
export const RecipePage = () => {

    

    
  const [recipes, setRecipes] = useState([
    {
      nombre: "Sushi",
      descripcion: "El sushi es un plato japonés de arroz sazonado con vinagre, pescado crudo o vegetales. Pequeñas porciones servidas con salsa de soja.",
      imagen: sushi,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Curry",
      descripcion: "El curry es un plato aromático de la cocina india. Mezcla de especias cocinadas con carne, pollo o vegetales en salsa espesa. Sabor rico y picante.",
      imagen: curry,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Sopa de miso",
      descripcion: "La sopa de miso es una sopa japonesa con caldo de pescado y pasta de miso. Sabrosa y nutritiva, se sirve con tofu, algas y cebolla verde.",
      imagen: sopa,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Pad Thai",
      descripcion: "El Pad Thai es un plato tailandés con fideos de arroz salteados, camarones o pollo, huevos, brotes de soja y cacahuetes. Sabor equilibrado y texturas vibrantes.",
      imagen: pad,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Sashimi",
      descripcion: "El sashimi es un plato japonés de pescado crudo en finas lonchas. Fresco y sabroso, se sirve sin arroz, con salsa de soja y wasabi.",
      imagen: sashimi,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Tacos",
      descripcion: "Los tacos son una comida mexicana con tortillas de maíz o harina rellenas de carne, pollo, pescado o vegetales. Sabrosos y versátiles.",
      imagen: tacos,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Ceviche",
      descripcion: "El ceviche es un plato latinoamericano con mariscos o pescado crudo marinado en jugo cítrico. Acompañado de cebolla, ají y cilantro. Fresco y sabroso.",
      imagen: ceviche,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Empanadas de Queso",
      descripcion: "Las empanadas de queso son masas rellenas de queso derretido. Se hornean o fríen hasta obtener una textura crujiente. Deliciosas como aperitivo o plato principal.",
      imagen: empanada,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Enchiladas",
      descripcion: "Las enchiladas son tortillas de maíz rellenas y enrolladas. Se rellenan con pollo, carne, queso o frijoles, y se bañan en salsa de chile. Se sirven con queso, crema y guarniciones. Sabrosas y picantes.",
      imagen: enchiladas,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Arepas",
      descripcion: "Las arepas son tortillas redondas de masa de maíz o harina de maíz. Se cocinan a la plancha hasta obtener una textura crujiente por fuera y suave por dentro. Se rellenan con carne, queso, pollo u otros ingredientes. Versátiles y deliciosas.",
      imagen: arepas,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Paella",
      descripcion: "La paella es un plato español de arroz cocinado con pollo, conejo, mariscos, vegetales y especias en una paellera. Se obtiene una capa dorada llamada 'socarrat'. Sabroso y representativo de la gastronomía española.",
      imagen: paella,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Moussaka",
      descripcion: "La moussaka es un plato griego con capas de berenjenas, carne picada, tomate, especias y bechamel. Se hornea hasta obtener una textura suave y dorada. Sabroso y representativo de la cocina griega.",
      imagen: moussaka,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Fish and chips",
      descripcion: "Fish and chips es un plato británico con filetes de pescado frito y papas fritas. Se sirve con salsa de acompañamiento. Delicioso y popular en el Reino Unido.",
      imagen: fish,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Risotto",
      descripcion: "El risotto es un plato italiano de arroz cremoso cocinado en caldo con ingredientes como cebolla, vino blanco, queso parmesano y mantequilla. Textura suave y sabor reconfortante. Versátil y delicioso.",
      imagen: rissoto,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Goulash",
      descripcion: "El goulash es un guiso espeso de carne de res o cerdo con cebolla, pimiento, paprika y especias. Se cocina a fuego lento hasta que la carne esté tierna. Sabroso y reconfortante.",
      imagen: goulash,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Tiramisú",
      descripcion: "El tiramisú es un postre italiano con capas de bizcochos empapados en café y crema de mascarpone. Sabroso y cremoso, equilibra el dulce y el amargo del café. Delicia clásica de la cocina italiana.",
      imagen: tiramisu,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Fajitas",
      descripcion: "Las fajitas son un plato tex-mex con tiras de carne salteadas con pimientos y cebolla. Se sazonan con especias como comino y chile en polvo. Se sirven en tortillas de harina y se acompañan con guacamole, salsa y crema. Sabrosas y versátiles.",
      imagen: fajitas,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Pato a la Pekinesa",
      descripcion: "El pato a la pekinesa es un plato chino con pato asado de piel crujiente y carne jugosa. Se sirve con crepes de trigo, cebollino, pepino y salsa hoisin. Sabroso y tradicionalmente celebrado.",
      imagen: pato,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Shawarma",
      descripcion: "El shawarma es un plato mediterráneo con rebanadas finas de carne asada en un asador vertical. Se sirve en pan pita o envuelto en pan árabe con ensalada y salsa de yogur. Sabroso y especiado, popular en todo el mundo.",
      imagen: shawarma,
      receta: "Poner receta aqui",
      favorito: false,
    },
    {
      nombre: "Borscht",
      descripcion: "El borscht es una sopa tradicional de Europa del Este con remolacha como ingrediente principal. Puede contener repollo, zanahorias, patatas y cebolla. Puede ser vegetariano o incluir carne. Sabor rico y ligeramente ácido. Reconfortante y nutritivo.",
      imagen: borscht,
      receta: "Poner receta aqui",
      favorito: false,
    },
  ]); 

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleCreateRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const [showCreateForm, setShowCreateForm] = useState(false);

  
  

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  return (
    <div className="imagen-fondo">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center fixed-top w-100 header-transparent">
              <header>
                <h1 className="header-personalizado">Recetas Culinarias</h1>
              </header>
            </div>
            <div className="tarjetas-container mt-5">
              {showCreateForm ? (
                <CreateRecipeForm
                  onCreateRecipe={handleCreateRecipe}
                  className="create-recipe-form"
                />
              ) : (
                <CreateRecipeForm
                  onCreateRecipe={handleCreateRecipe}
                  className="create-recipe-form hidden"
                />
              )}
              <RecipeList
                recipes={recipes}
                showCreateForm={showCreateForm}
                toggleCreateForm={toggleCreateForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  export default RecipePage;
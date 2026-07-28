document.addEventListener("DOMContentLoaded", function () {

    // Número de WhatsApp (sin el +)
    const whatsappNumber = "14383231484";

    // Traducciones
    const translations = {
        en: {
            title: "Homemade Cakes",
            subtitle: "Crafted with passion and premium ingredients",
            orderNow: "Order Now",
            catalogTitle: "Our Signature Cakes",
            catalogSubtitle: "Made with love, one cake at a time",
            cakes: [
                {
                    name: "Fresh Fruit Cake",
                    description: "Fresh strawberries, kiwi, peaches and blueberries over light vanilla cream."
                },
                {
                    name: "Fresita Cake",
                    description: "Soft sponge filled with fresh strawberries and whipped cream. A classic favorite."
                },
                {
                    name: "Birthday Cake",
                    description: "Custom birthday cake for children and adults. Personalized flavors and decorations."
                },
                {
                    name: "Cartoon Cake",
                    description: "Fun and colorful character cakes. Perfect for kids’ parties and special celebrations."
                },
                {
                    name: "Sport Cake",
                    description: "Themed cakes for sports lovers. Soccer, basketball, hockey and more."
                },
                {
                    name: "Flowers Cake",
                    description: "Elegant floral designs with delicate buttercream flowers. Ideal for special occasions."
                },
                {
                    name: "Strawberry Cake",
                    description: "Soft vanilla sponge with fresh strawberries and light whipped cream."
                },
                {
                    name: "Cherry Cake",
                    description: "Delicious cherry filling with soft sponge and elegant decoration."
                },
                {
                    name: "Movie Cake",
                    description: "Themed cakes inspired by your favorite movies and characters."
                },
                {
                    name: "Game Cake",
                    description: "Fun cakes inspired by video games and board games. Perfect for gamers."
                },
                {
                    name: "Sport Cake",
                    description: "Classic sport-themed cake. Perfect for soccer, basketball and team celebrations."
                },
                {
                    name: "Sport Cake Pro",
                    description: "Detailed sport design with team colors and realistic decorations."
                },
                {
                    name: "Championship Cake",
                    description: "Celebrate the victory with a custom championship-style cake."
                },
                {
                    name: "Cartoon Cake Deluxe",
                    description: "Colorful character cake with extra details. Ideal for kids’ birthday parties."
                },
                {
                    name: "Special Birthday Cake",
                    description: "Elegant and fun birthday cake with custom decorations for any age."
                }
                
            ],
            startingAt: "Starting at",
            footer: "© 2026 Gâteaux de Saris · Homemade with passion",
            aboutTitle: "About Us",
            aboutText: "At Gâteaux de Saris we believe that every cake tells a story. Our cakes are handmade using fresh, high-quality ingredients, carefully crafted from baking to the final decoration. Whether it’s a birthday, a special celebration, or simply a treat for yourself, we want to create a dessert that looks as beautiful as it tastes. Thank you for letting us be part of your sweetest moments.",
            whatsappMessage: "Hello! I'm interested in the *{cake}*. Could you give me more information?"
        },
        fr: {
            title: "Gâteaux Maison",
            subtitle: "Préparé avec passion et des ingrédients de qualité",
            orderNow: "Commander",
            catalogTitle: "Nos Gâteaux",
            catalogSubtitle: "Fait avec amour, un gâteau à la fois",
            cakes: [
                {
                    name: "Gâteau aux Fruits Frais",
                    description: "Fraises, kiwi, pêches et bleuets frais sur une crème vanille légère."
                },
                {
                    name: "Gâteau Fresita",
                    description: "Génoise moelleuse fourrée de fraises fraîches et de crème fouettée. Un classique."
                },
                {
                    name: "Gâteau d'Anniversaire",
                    description: "Gâteau d'anniversaire personnalisé pour enfants et adultes. Saveurs et décorations sur mesure."
                },
                {
                    name: "Gâteau Cartoon",
                    description: "Gâteaux amusants et colorés avec des personnages. Parfait pour les fêtes d'enfants."
                },
                {
                    name: "Gâteau Sport",
                    description: "Gâteaux thématiques pour les amateurs de sport. Soccer, basketball, hockey et plus."
                },
                {
                    name: "Gâteau Fleurs",
                    description: "Designs floraux élégants avec des fleurs en crème au beurre. Idéal pour les occasions spéciales."
                },
                {
                    name: "Gâteau aux Fraises",
                    description: "Génoise vanille moelleuse avec fraises fraîches et crème fouettée légère."
                },
                {
                    name: "Gâteau aux Cerises",
                    description: "Délicieuse garniture aux cerises avec génoise moelleuse et décoration élégante."
                },
                {
                    name: "Gâteau Cinéma",
                    description: "Gâteaux thématiques inspirés de vos films et personnages préférés."
                },
                {
                    name: "Gâteau Jeux",
                    description: "Gâteaux amusants inspirés des jeux vidéo et de société. Parfait pour les gamers."
                },
                {
                    name: "Gâteau Sport",
                    description: "Gâteau classique sur le thème du sport. Parfait pour le soccer, basketball et célébrations d'équipe."
                },
                {
                    name: "Gâteau Sport Pro",
                    description: "Design sportif détaillé avec couleurs d'équipe et décorations réalistes."
                },
                {
                    name: "Gâteau Championnat",
                    description: "Célébrez la victoire avec un gâteau style championnat personnalisé."
                },
                {
                    name: "Gâteau Cartoon Deluxe",
                    description: "Gâteau de personnage coloré avec détails supplémentaires. Idéal pour les fêtes d'enfants."
                },
                {
                    name: "Gâteau d'Anniversaire Spécial",
                    description: "Gâteau d'anniversaire élégant et amusant avec décorations personnalisées pour tout âge."
                }
            ],
            startingAt: "À partir de",
            footer: "© 2026 Gâteaux de Saris · Fait maison avec passion",
            aboutTitle: "À Propos de Nous",
            aboutText: "Chez Gâteaux de Saris, nous croyons que chaque gâteau raconte une histoire. Nos gâteaux sont préparés de manière artisanale avec des ingrédients frais et de haute qualité, en soignant chaque détail de la cuisson jusqu’à la décoration finale. Que ce soit pour un anniversaire, une célébration spéciale ou simplement pour se faire plaisir, nous voulons créer un dessert aussi beau que savoureux. Merci de nous permettre de faire partie de vos moments les plus doux.",
            whatsappMessage: "Bonjour! Je suis intéressé(e) par le *{cake}*. Pourriez-vous me donner plus d'informations?"
        },
        es: {
            title: "Pasteles Caseros",
            subtitle: "Elaborados con pasión e ingredientes de primera calidad",
            orderNow: "Ordenar Ahora",
            catalogTitle: "Nuestros Pasteles",
            catalogSubtitle: "Hechos con amor, un pastel a la vez",
            cakes: [
                {
                    name: "Pastel de Frutas Frescas",
                    description: "Fresas, kiwi, duraznos y arándanos frescos sobre crema de vainilla ligera."
                },
                {
                    name: "Pastel Fresita",
                    description: "Bizcocho suave relleno de fresas frescas y crema batida. Un clásico favorito."
                },
                {
                    name: "Pastel de Cumpleaños",
                    description: "Pastel de cumpleaños personalizado para niños y adultos. Sabores y decoraciones a tu gusto."
                },
                {
                    name: "Pastel Cartoon",
                    description: "Pasteles divertidos y coloridos con personajes. Perfectos para fiestas infantiles."
                },
                {
                    name: "Pastel Deportivo",
                    description: "Pasteles temáticos para amantes del deporte. Fútbol, baloncesto, hockey y más."
                },
                {
                    name: "Pastel de Flores",
                    description: "Diseños florales elegantes con delicadas flores de buttercream. Ideal para ocasiones especiales."
                },
                {
                    name: "Pastel de Fresa",
                    description: "Bizcocho de vainilla suave con fresas frescas y crema batida ligera."
                },
                {
                    name: "Pastel de Cereza",
                    description: "Delicioso relleno de cereza con bizcocho suave y decoración elegante."
                },
                {
                    name: "Pastel de Película",
                    description: "Pasteles temáticos inspirados en tus películas y personajes favoritos."
                },
                {
                    name: "Pastel de Juegos",
                    description: "Pasteles divertidos inspirados en videojuegos y juegos de mesa. Perfectos para gamers."
                },
                {
                    name: "Pastel Deportivo",
                    description: "Pastel clásico con temática deportiva. Perfecto para fútbol, baloncesto y celebraciones de equipo."
                },
                {
                    name: "Pastel Deportivo Pro",
                    description: "Diseño deportivo detallado con colores del equipo y decoraciones realistas."
                },
                {
                    name: "Pastel de Campeonato",
                    description: "Celebra la victoria con un pastel personalizado estilo campeonato."
                },
                {
                    name: "Pastel Cartoon Deluxe",
                    description: "Pastel de personaje colorido con detalles extras. Ideal para fiestas infantiles."
                },
                {
                    name: "Pastel de Cumpleaños Especial",
                    description: "Pastel de cumpleaños elegante y divertido con decoraciones personalizadas para cualquier edad."
                }
            ],
            startingAt: "Desde",
            footer: "© 2026 Gâteaux de Saris · Hecho en casa con pasión",
            aboutTitle: "Sobre Nosotros",
            aboutText: "En Gâteaux de Saris creemos que cada pastel cuenta una historia. Nuestros pasteles son elaborados de manera artesanal, utilizando ingredientes frescos y de alta calidad, cuidando cada detalle desde el horneado hasta la decoración final. Ya sea para un cumpleaños, una celebración especial o simplemente para darte un gusto, queremos crear un postre que se vea tan hermoso como sabe. Gracias por permitirnos ser parte de tus momentos más dulces.",
            whatsappMessage: "¡Hola! Me interesa el *{cake}*. ¿Me puedes dar más información?"
        }
    };

    const frBtn = document.getElementById("frBtn");
    const enBtn = document.getElementById("enBtn");
    const esBtn = document.getElementById("esBtn");

    let currentLang = "en";

    function setLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        currentLang = lang;

        // Textos principales
        document.getElementById("title").textContent = t.title;
        document.getElementById("subtitle").textContent = t.subtitle;
        document.querySelector(".section-header h2").textContent = t.catalogTitle;
        document.querySelector(".section-header p").textContent = t.catalogSubtitle;
        document.querySelector("footer p").textContent = t.footer;
        document.getElementById("aboutTitle").textContent = t.aboutTitle;
        document.getElementById("aboutText").textContent = t.aboutText;
        // Botones "Order Now"
        document.querySelectorAll(".order-btn, .order-small").forEach(btn => {
            btn.textContent = t.orderNow;
        });

        // Tarjetas de pasteles
        const cards = document.querySelectorAll(".cake-card");
        cards.forEach((card, index) => {
            if (!t.cakes[index]) return;

            card.querySelector("h3").textContent = t.cakes[index].name;
            card.querySelector(".description").textContent = t.cakes[index].description;

            const priceEl = card.querySelector(".price");
            const priceMatch = priceEl.textContent.match(/\$\d+\s*CAD/);
            if (priceMatch) {
                priceEl.textContent = `${t.startingAt} ${priceMatch[0]}`;
            }
        });

        // Estado de los botones de idioma
        frBtn.classList.remove("active");
        enBtn.classList.remove("active");
        esBtn.classList.remove("active");

        if (lang === "fr") {
            frBtn.classList.add("active");
            document.documentElement.lang = "fr";
        } else if (lang === "es") {
            esBtn.classList.add("active");
            document.documentElement.lang = "es";
        } else {
            enBtn.classList.add("active");
            document.documentElement.lang = "en";
        }

        localStorage.setItem("language", lang);
    }

    // ========== WHATSAPP ==========
    function openWhatsApp(cakeName) {
        const t = translations[currentLang];
        const message = t.whatsappMessage.replace("{cake}", cakeName);
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    // Botón grande del Hero
    document.querySelector(".order-btn").addEventListener("click", function (e) {
        e.preventDefault();
        openWhatsApp(translations[currentLang].title);
    });

    // Botones de cada tarjeta
    document.querySelectorAll(".order-small").forEach((btn, index) => {
        btn.addEventListener("click", function () {
            const cakeName = translations[currentLang].cakes[index].name;
            openWhatsApp(cakeName);
        });
    });

    // Eventos de idioma
    frBtn.addEventListener("click", () => setLanguage("fr"));
    enBtn.addEventListener("click", () => setLanguage("en"));
    esBtn.addEventListener("click", () => setLanguage("es"));

    // Cargar idioma guardado
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
});
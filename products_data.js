// SSP Industries Product Catalog Database
const PRODUCTS = [
  {
    "id": "water-tank-cleaner",
    "name": "Curamax Premium Water Tank Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-water",
    "description": "Formulated to clean sludge, algae, and bacterial buildup from water tanks, ensuring safe water storage.",
    "image": "assets/final11/Product_bottle_shot_CURAMAX_cleaner_202607051416.jpeg"
  },
  {
    "id": "solar-panel-cleaner",
    "name": "Curamax Premium Solar Panel Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-solar-panel",
    "description": "Removes dust, bird droppings, and industrial grime from solar panels to maximize solar energy efficiency.",
    "image": "assets/final11/3 in 1 formula.jpeg"
  },
  {
    "id": "drainage-pipe-cleaner",
    "name": "Curamax Premium Drainage Pipe Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-soap",
    "description": "Lifts organic blockages and maintains smooth drainage flow in kitchen and bathroom pipe networks.",
    "image": "assets/final11/leather stain remover.jpeg"
  },
  {
    "id": "terrace-cleaner",
    "name": "Curamax Premium Terrace Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-house",
    "description": "Removes moss, mold, dirt, and weather stains from concrete, tiles, and stone terrace floors.",
    "image": "assets/final11/stainless steel cleaner.jpeg"
  },
  {
    "id": "odour-neutralizer",
    "name": "Curamax Premium Odour Neutralizer",
    "category": "other",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-wind",
    "description": "Destroys organic odor molecules (ammonia, hydrogen sulfide) instead of masking them. Perfect for public areas.",
    "image": "assets/final11/odour nurilizer.jpeg"
  },
  {
    "id": "mosquito-repellent",
    "name": "Curamax Premium Natural Based Mosquito Repellent",
    "category": "repellents",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-mosquito",
    "description": "An eco-friendly, plant-extract based vaporizing spray that repels mosquitoes without toxic chemical emissions.",
    "image": "assets/final11/mosquito repellent.jpeg"
  },
  {
    "id": "rat-repellent",
    "name": "Curamax Premium Natural Based Rat Repellent",
    "category": "repellents",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-shield-cat",
    "description": "A highly effective natural formula that creates a scent barrier to repel rodents and prevent nesting in indoor areas.",
    "image": "assets/final11/ant repellent.jpeg"
  },
  {
    "id": "housefly-repellent",
    "name": "Curamax Premium Natural Based Housefly Repellent",
    "category": "repellents",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-ban",
    "description": "Organic surface spray containing plant compounds that deter houseflies from dining, food prep, and storage zones.",
    "image": "assets/final11/ant repellent.jpeg"
  },
  {
    "id": "cockroach-repellent",
    "name": "Curamax Premium Natural Based Cockroach Repellent",
    "category": "repellents",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-bug-slash",
    "description": "Herbal extract formulation that eliminates hiding spots and repels cockroaches in pantries and kitchens.",
    "image": "assets/final11/cockroach repelent.jpeg"
  },
  {
    "id": "mattress-cleaner",
    "name": "Curamax Premium Mattress Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-bed",
    "description": "Eliminates deep sweat stains, odors, dust mites, and bacteria without soaking mattress fibers.",
    "image": "assets/final11/matress cleaner.jpeg"
  },
  {
    "id": "pvc-mat-cleaner",
    "name": "Curamax Premium PVC Floor Mat Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-border-all",
    "description": "Specially formulated to remove embedded mud, dirt, and stains from rubber and PVC door mats.",
    "image": "assets/final11/CURAMAX_PVC_Floor_Mat_Cleaner_202607051415.jpeg"
  },
  {
    "id": "sofa-cleaner",
    "name": "Curamax Premium Sofa Cleaner (Fabric)",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-couch",
    "description": "Gently lifts coffee stains, oil, and dust from fabric sofas, restoring the look of upholstery.",
    "image": "assets/final11/Premium_sofa_cleaner_product_photo_202607051415.jpeg"
  },
  {
    "id": "chair-cloth-cleaner",
    "name": "Curamax Premium Chair Cloth Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-chair",
    "description": "Fast-acting stain remover for office and banquet chairs wrapped in textile covers.",
    "image": "assets/final11/CURAMAX_Chair_Cloth_Cleaner_bottle_202607051416.jpeg"
  },
  {
    "id": "algae-remover",
    "name": "Curamax Premium Algae Remover",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-spa",
    "description": "Disinfectant solution designed to eradicate algae, moss, and green slime from tiles and walls.",
    "image": "assets/final11/Spray_bottle_labeled_CURAMAX_repellent_202607051416.jpeg"
  },
  {
    "id": "stainless-steel-cleaner",
    "name": "Curamax Premium Stainless Steel Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-sparkles",
    "description": "Restores original metallic shine on kitchen ranges, rails, and bathroom fixtures, removing water stains.",
    "image": "assets/final11/stainless steel cleaner.jpeg"
  },
  {
    "id": "leather-stain-cleaner",
    "name": "Curamax Premium Leather Stain Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-shoe-prints",
    "description": "Cleans and conditions leather upholstery, jackets, and accessories without causing cracks.",
    "image": "assets/final11/CURAMAX_Leather_Stain_Cleaner_bottle_202607051415.jpeg"
  },
  {
    "id": "carpet-cleaner",
    "name": "Curamax Premium Carpet Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-rug",
    "description": "Deep-cleaning foam that lifts trodden dirt, mud, and beverage spills from commercial carpets.",
    "image": "assets/final11/Spray_bottle_labeled_CURAMAX_cleaner_202607051416.jpeg"
  },
  {
    "id": "tiles-cleaner",
    "name": "Curamax Premium Tiles Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-border-none",
    "description": "Restores bathroom tiles and wall grout lines by breaking down dirt buildup and hard water stains.",
    "image": "assets/final11/Product_bottle_shot_CURAMAX_cleaner_202607051416.jpeg"
  },
  {
    "id": "pool-colour-enhancer",
    "name": "Curamax Premium Pool Colour Enhancer",
    "category": "other",
    "brand": "premium",
    "sectors": [
      "hospitality"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-droplet",
    "description": "Maintains crystal clear water coloration and prevents turbidity in commercial swimming pools.",
    "image": "assets/final11/CURAMAX_Premium_Pool_Colour_Enhancer_202607051415.jpeg"
  },
  {
    "id": "room-freshner",
    "name": "Curamax Forte Room Freshner",
    "category": "other",
    "brand": "forte",
    "sectors": [
      "hospitality",
      "industrial"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-spray-can",
    "description": "Long-lasting fragrance spray that masks foul odors and creates a welcoming atmosphere in guest rooms.",
    "image": "assets/final11/CURAMAX_Forte_Room_Freshner_2K_202607051415.jpeg"
  },
  {
    "id": "chimney-cleaner",
    "name": "Curamax Forte Chimney Cleaner",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-soap",
    "description": "An heavy-duty alkaline formula that quickly dissolves sticky grease, oil, and carbon soot in exhaust hoods.",
    "image": "assets/final11/Cleaning_bottle_labeled_CURAMAX_202607051416.jpeg"
  },
  {
    "id": "hard-stain-remover-floor",
    "name": "Curamax Forte Hard Stain Remover - Floor",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-fill-drip",
    "description": "Strong stain remover that strips old concrete stains, rust spots, and heavy scale deposits from floors.",
    "image": "assets/final11/CURAMAX_Forte_stain_remover_bottle_202607051414.jpeg"
  },
  {
    "id": "oil-grease-remover-floor",
    "name": "Curamax Forte Oil and Grease Remover - Floor",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality",
      "industrial"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-oil-can",
    "description": "Highly effective emulsifier that breaks down industrial grease, oil spills, and tire marks on factory and garage floors.",
    "image": "assets/final11/White_heavy-duty_fluid_bottle_2K_202607051415.jpeg"
  },
  {
    "id": "oil-grease-remover-hand",
    "name": "Curamax Forte Oil and Grease Remover - Hand",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality",
      "industrial"
    ],
    "packing": "200ml / 5 Ltr",
    "icon": "fa-solid fa-hands-wash",
    "description": "Heavy-duty hand cleaner designed for mechanics and factory workers to remove oil, grease, and ink safely.",
    "image": "assets/final11/Heavy-duty_hand_cleaner_bottle_2K_202607051417.jpeg"
  },
  {
    "id": "insect-repellent-floor-cleaner",
    "name": "Curamax Forte Insect Repellent Floor Cleaner",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality",
      "industrial",
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-bug",
    "description": "Dual-action floor disinfectant that repels crawling insects while cleaning and sanitizing floor tiles.",
    "image": "assets/final11/herbal phenyl.jpeg"
  },
  {
    "id": "fungal-commode-cleaner",
    "name": "Curamax Forte Fungal Infection Cleaner for Commode",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-toilet",
    "description": "Medical-grade toilet bowl disinfectant targeting fungi and pathogens to ensure sanitary toilet use.",
    "image": "assets/final11/Fungal_infection_cleaner_bottle_2K_202607051416.jpeg"
  },
  {
    "id": "bathroom-glass-cleaner",
    "name": "Curamax Forte Bathroom Glass Cleaner",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospitality"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-glass-water",
    "description": "Leaves mirrors and shower screens streak-free, dissolving hard water salt rings and soap film.",
    "image": "assets/final11/class cleaner.jpeg"
  },
  {
    "id": "nano-3-in-1",
    "name": "Curamax Nano 3 In 1 Formula",
    "category": "cleaners",
    "brand": "nano",
    "sectors": [
      "hospitality"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-vials",
    "description": "A concentrated multi-surface cleaner for floors, hands, and kitchen utensils, based on biodegradable elements.",
    "image": "assets/final11/CURAMAX_Nano_3_In_1_202607051415.jpeg"
  },
  {
    "id": "drain-cleaner-forte",
    "name": "Curamax Forte Drain Cleaner",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "industrial"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-sink",
    "description": "Cleans clogged industrial drainage pipelines, dissolving hair, soap scum, and organic fats.",
    "image": "assets/final11/toilet cleaner.jpeg"
  },
  {
    "id": "antimicrobial-cloth-wash",
    "name": "Curamax Premium Antimicrobial Cloth Wash",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-shirt",
    "description": "Ensures hygienic linen cleaning in hospitals, neutralizing bacteria and odor-causing microbes.",
    "image": "assets/final11/Liquid_detergent_bottle_labeled_CURAMAX_202607051415.jpeg"
  },
  {
    "id": "icu-floor-cleaner",
    "name": "Curamax Premium ICU Floor Cleaner",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-hospital",
    "description": "Sterile-grade hospital floor disinfectant formulated for surgical suites and intensive care units.",
    "image": "assets/final11/Medical_floor_cleaner_bottle_2K_202607051415.jpeg"
  },
  {
    "id": "human-fluid-liquid",
    "name": "Curamax Premium Human Fluid Liquid",
    "category": "cleaners",
    "brand": "premium",
    "sectors": [
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-shield-virus",
    "description": "Bio-hazard fluid solidifier and sanitizer for safe cleanup of fluid spills in medical environments.",
    "image": "assets/final11/Medical_fluid_bottle_labeled_CURAMAX_202607051415.jpeg"
  },
  {
    "id": "drainage-pipe-cleaner-forte",
    "name": "Curamax Forte Drainage Pipe Cleaner",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospital"
    ],
    "packing": "500ML / 5 Ltr",
    "icon": "fa-solid fa-soap",
    "description": "Dissolves organic blockages and sanitizes pipes in hospital kitchen and utility areas.",
    "image": "assets/final11/toilet cleaner.jpeg"
  },
  {
    "id": "blood-stain-remover-floor",
    "name": "Curamax Forte Blood Stain Remover - Floor",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospital"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-droplet",
    "description": "Enzymatic cleaner designed to lift blood spills, protein stains, and serums from floor tiles.",
    "image": "assets/final11/Cleaner_bottle_labeled_CURAMAX_Forte_202607051416.jpeg"
  },
  {
    "id": "blood-stain-remover-fabric",
    "name": "Curamax Forte Blood Stain Remover - Fabric",
    "category": "cleaners",
    "brand": "forte",
    "sectors": [
      "hospital"
    ],
    "packing": "1 Ltr / 5 Ltr",
    "icon": "fa-solid fa-shirt",
    "description": "Deep action cleaner that targets and lifts stubborn blood and body fluid spots from linen.",
    "image": "assets/final11/Curamax_Forte_Blood_Stain_Remover_202607051416.jpeg"
  },
  {
    "id": "silk-saree-stain-remover",
    "name": "Curamax Premium Silk Saree Stain Remover",
    "category": "customised",
    "brand": "premium",
    "sectors": [
      "customised"
    ],
    "packing": "100ml / 5 Ltr",
    "icon": "fa-solid fa-palette",
    "description": "Extremely gentle spot cleaner engineered to remove grease, food, and ink stains from delicate silk fabrics.",
    "image": "assets/final11/CURAMAX_Silk_Saree_Stain_Remover_202607051415.jpeg"
  },
  {
    "id": "dish-wash-smell-remover",
    "name": "Curamax Premium Dish Wash Smell Remover",
    "category": "customised",
    "brand": "premium",
    "sectors": [
      "customised"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-utensils",
    "description": "Removes persistent fishy, onion, or spicy odors from tableware and kitchen utensils.",
    "image": "assets/final11/CURAMAX_Premium_Dish_Wash_bottle_202607051415.jpeg"
  },
  {
    "id": "fridge-fungal-remover",
    "name": "Curamax Premium Fridge / Cold Storage Fungal Remover",
    "category": "customised",
    "brand": "premium",
    "sectors": [
      "customised"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-snowflake",
    "description": "Sanitizes interior surfaces of refrigerators and commercial cold storage rooms, killing mold spores.",
    "image": "assets/final11/Fridge_fungal_remover_spray_bottle_202607051415.jpeg"
  },
  {
    "id": "fridge-smell-remover",
    "name": "Curamax Premium Fridge Smell Remover",
    "category": "customised",
    "brand": "premium",
    "sectors": [
      "customised"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-wind",
    "description": "Neutralizes stale and mixed food odors inside home and industrial refrigerators.",
    "image": "assets/final11/Spray_bottle_fridge_smell_remover_202607051415.jpeg"
  },
  {
    "id": "pigeon-repellent-premium",
    "name": "Curamax Premium Pigeon Repellent",
    "category": "repellents",
    "brand": "premium",
    "sectors": [
      "customised"
    ],
    "packing": "500ml / 5 Ltr",
    "icon": "fa-solid fa-dove",
    "description": "Non-toxic visual and scent deterrent that keeps pigeons off windows, balconies, and ledges.",
    "image": "assets/final11/pigeon repellent.jpeg"
  },
  {
    "id": "3-ply-box",
    "name": "3-Ply Corrugated Shipping Box",
    "category": "packaging",
    "brand": "packaging",
    "sectors": [
      "packaging"
    ],
    "packing": "3-Ply Fluted",
    "icon": "fa-solid fa-box",
    "description": "Cost-effective cardboard shipping box crafted with rust-free stitching pins. Perfect for light to medium cargo.",
    "image": "assets/final11/Product_layout_shipping_retail_box_202607051413.jpeg"
  },
  {
    "id": "5-ply-box",
    "name": "5-Ply Reinforced Cargo Box",
    "category": "packaging",
    "brand": "packaging",
    "sectors": [
      "packaging"
    ],
    "packing": "5-Ply Double-Wall",
    "icon": "fa-solid fa-boxes-packing",
    "description": "High-strength packaging optimized for industrial goods, auto parts, and heavy commercial storage.",
    "image": "assets/final11/Product_layout_shipping_retail_box_202607051413.jpeg"
  },
  {
    "id": "7-ply-crate",
    "name": "7-Ply Premium Stacking Crate",
    "category": "packaging",
    "brand": "packaging",
    "sectors": [
      "packaging"
    ],
    "packing": "7-Ply Multi-Wall",
    "icon": "fa-solid fa-boxes-stacked",
    "description": "Heavy-duty cardboard crate built for heavy machinery, sea freight, and export logistics.",
    "image": "assets/final11/Product_layout_shipping_retail_box_202607051413.jpeg"
  },
  {
    "id": "custom-carton",
    "name": "Custom Carton & Retail Boxes",
    "category": "packaging",
    "brand": "packaging",
    "sectors": [
      "packaging"
    ],
    "packing": "Bespoke Size",
    "icon": "fa-solid fa-box-open",
    "description": "Custom sized retail cartons designed with custom flexographic branding to display your products.",
    "image": "assets/final11/Product_layout_shipping_retail_box_202607051413.jpeg"
  }
];

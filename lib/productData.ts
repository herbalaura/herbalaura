export interface Testimonial {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface ProductData {
  slug: string;
  title: string;
  price: number;
  badge: {
    text: string;
    color: string;
  };
  shortDescription: string;
  fullDescription: string[];
  benefits: string[];
  ingredients: string;
  gallery: {
    component: string;
  };
  testimonials: Testimonial[];
  reviewCount: number;
}

export const productData: Record<string, ProductData> = {
  mullein: {
    slug: "mullein",
    title: "Mullein Leaf Capsules",
    price: 24.99,
    badge: {
      text: "Bestseller",
      color: "#a3ff00",
    },
    shortDescription: "Support respiratory health with our organic Mullein Leaf supplement. Traditionally used for asthma, smoking-related concerns, and seasonal allergies.",
    fullDescription: [
      "Our premium Mullein Leaf capsules harness the power of this traditional herb to support respiratory health. Mullein has been used for centuries to soothe the lungs and promote clearer breathing.",
      "Benefits include:",
    ],
    benefits: [
      "Supports respiratory health",
      "Soothes irritated lungs and airways",
      "Helps with asthma and breathing issues",
      "Supports recovery after smoking",
      "Helps clear mucus and congestion",
    ],
    ingredients: "100% Organic Mullein Leaf (Verbascum thapsus), Vegetable Cellulose Capsule",
    gallery: {
      component: "MulleinLeafProductGallery",
    },
    testimonials: [
      {
        name: "Sarah M.",
        date: "May 20, 2024",
        text: "I've been a smoker for over 15 years, and my lungs always felt heavy and tight. After just a couple of weeks on Mullein Leaf, I started breathing easier and coughing less. It truly feels like my lungs have been deeply detoxed.",
        rating: 5
      },
      {
        name: "John D.",
        date: "April 15, 2024",
        text: "I suffer from mild asthma and often get short of breath, especially during allergy season. Since starting Mullein Leaf, my breathing has felt much more open and manageable. It's the only herbal supplement that's actually made a difference.",
        rating: 5
      },
      {
        name: "Emily R.",
        date: "March 22, 2024",
        text: "I had constant mucus buildup in my chest and always felt congested in the mornings. Mullein Leaf helped break that up and clear it out naturally. I feel lighter, clearer, and way more comfortable throughout the day.",
        rating: 5
      }
    ],
    reviewCount: 21
  },
  ashwagandha: {
    slug: "ashwagandha",
    title: "Ashwagandha Capsules",
    price: 24.99,
    badge: {
      text: "Popular",
      color: "#a3ff00",
    },
    shortDescription: "Naturally reduces cortisol levels, helping the body combat stress and fatigue. By balancing this key hormone, it supports relaxation, mental clarity, and a stronger immune system.",
    fullDescription: [
      "Our premium Ashwagandha capsules harness the power of this ancient adaptogenic herb to help your body manage stress and promote overall wellbeing. Ashwagandha has been used for centuries in traditional Ayurvedic medicine to restore balance and vitality.",
      "Benefits include:",
    ],
    benefits: [
      "Helps reduce stress and anxiety",
      "Supports healthy cortisol levels",
      "Promotes mental clarity and focus",
      "Supports immune function",
      "Enhances energy and vitality"
    ],
    ingredients: "100% Organic Ashwagandha Root Extract (Withania somnifera), Vegetable Cellulose Capsule",
    gallery: {
      component: "AshwagandhaProductGallery",
    },
    testimonials: [
      {
        name: "Jason R.",
        date: "May 28, 2024",
        text: "I started taking Ashwagandha to improve my energy levels, and it's been a total game-changer. I feel more focused during work hours, and that mid-afternoon crash is gone. I actually look forward to getting things done now.",
        rating: 5
      },
      {
        name: "Danielle K.",
        date: "May 16, 2024",
        text: "I was constantly stressed and overwhelmed, especially at night. Ashwagandha has helped me wind down naturally. I'm sleeping better, and I feel way more emotionally balanced throughout the day.",
        rating: 5
      },
      {
        name: "Leo S.",
        date: "April 30, 2024",
        text: "I've been taking Ashwagandha consistently for a few months, and I noticed I haven't caught a cold or felt run-down like before. It's become part of my daily routine to help strengthen my immune system, especially during travel season.",
        rating: 5
      }
    ],
    reviewCount: 19
  },
  "sea-moss": {
    slug: "sea-moss",
    title: "Sea Moss Capsules",
    price: 24.99,
    badge: {
      text: "New",
      color: "#a3ff00",
    },
    shortDescription: "Fuel your body with over 90 essential minerals found in sea moss, supporting immunity, digestion, and thyroid health. This nutrient-rich superfood promotes energy, gut balance, and overall vitality.",
    fullDescription: [
      "Our premium Sea Moss capsules are packed with over 90 essential minerals that your body needs for optimal health. Sea Moss (Irish Moss) has been used for centuries as a natural remedy for various health concerns.",
      "Benefits include:",
    ],
    benefits: [
      "Supports immune system function",
      "Promotes digestive health",
      "Supports thyroid function",
      "Helps maintain healthy skin",
      "Provides natural energy boost"
    ],
    ingredients: "100% Organic Irish Sea Moss (Chondrus crispus), Vegetable Cellulose Capsule",
    gallery: {
      component: "SeaMossProductGallery",
    },
    testimonials: [
      {
        name: "Alicia P.",
        date: "October 18, 2024",
        text: "I've been taking Sea Moss every morning and it's done wonders for my digestion and energy levels. I feel less bloated and way more alert during the day. It's now part of my daily routine and I swear by it.",
        rating: 5
      },
      {
        name: "Marcus L.",
        date: "February 3, 2025",
        text: "Sea Moss gave my immune system a real boost this winter. I usually get sick around February, but I haven't even caught a cold this year. My skin also feels clearer and healthier since I started taking it.",
        rating: 5
      },
      {
        name: "Danielle R.",
        date: "May 27, 2025",
        text: "I started using Sea Moss for thyroid support and noticed better focus and less fatigue within two weeks. It's one of the few supplements I've tried that actually made a difference. I'm really happy with the results so far.",
        rating: 5
      }
    ],
    reviewCount: 24
  }
};

export function getProductBySlug(slug: string): ProductData | undefined {
  return productData[slug];
}

export function getAllProductSlugs(): string[] {
  return Object.keys(productData);
} 
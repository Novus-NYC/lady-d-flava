/**
 * Dish names are exactly as they appear on Lady D’s Flava flyers posted to
 * Facebook (Labor Day "Restaurant Food Menu" and "Saturday Lunch Specials"),
 * in sentence case. Descriptions are short plain-language explainers for
 * visitors who don’t know the dishes yet; the client should confirm them.
 * No prices were published, so none are shown.
 */

export type Dish = {
  id: string
  name: string
  description: string
}

export type MenuGroup = {
  id: string
  title: string
  intro: string
  dishes: Dish[]
}

export const streetFood: MenuGroup = {
  id: "street-food",
  title: "Street food and plates",
  intro: "The everyday board. Most of it travels well, so it’s made for delivery.",
  dishes: [
    {
      id: "bake-and-salt-fish",
      name: "Bake and salt fish",
      description: "Fried bake split open and packed with seasoned saltfish and tomato.",
    },
    {
      id: "puri-and-curry",
      name: "Puri and curry",
      description: "Soft puri flatbread with curry, for tearing and scooping.",
    },
    {
      id: "doubles",
      name: "Doubles",
      description: "Two pieces of soft fried bara with curried channa and chutney.",
    },
    {
      id: "fish-and-fries",
      name: "Fish and fries",
      description: "Fried fish with a side of fries.",
    },
    {
      id: "wings-and-fries",
      name: "Wings and fries",
      description: "Chicken wings with a side of fries.",
    },
    {
      id: "pine-tart-and-chicken-patties",
      name: "Pine tart and chicken patties",
      description: "Flaky pastry folded around sweet pineapple filling, and patties filled with seasoned chicken.",
    },
    {
      id: "chow-mein",
      name: "Chow mein",
      description: "Caribbean-style stir-fried noodles.",
    },
  ],
}

export const saturday: MenuGroup = {
  id: "saturday",
  title: "Saturday lunch specials",
  intro: "Saturday is soup day, plus a couple of bigger plates.",
  dishes: [
    {
      id: "soup-with-chicken",
      name: "Soup with chicken",
      description: "A big bowl of Saturday soup with chicken.",
    },
    {
      id: "fried-snapper",
      name: "Fried snapper with a vegetable of your choice",
      description: "Whole fried snapper with eggplant or ochro on the side.",
    },
    {
      id: "puri-and-curry-chicken",
      name: "Puri and curry chicken",
      description: "Soft puri with curry chicken.",
    },
  ],
}

/** "Water !!" gets its own burst on the flyer, so it gets a line here. */
export const drinks: Dish[] = [{ id: "water", name: "Water", description: "Cold bottled water." }]

export const allDishes: Dish[] = [...streetFood.dishes, ...saturday.dishes, ...drinks]

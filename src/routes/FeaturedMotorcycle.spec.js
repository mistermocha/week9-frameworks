import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import FeaturedMotorcycle from "./FeaturedMotorcycle.svelte"; 

describe("Featured Rendering", () => {
    let fakeFeatured =   {
        id: '9',
        model: 'fakedemo',
        year: '2019',
        engine_cc: '11111',
        engine_hp: '22222',
        manufacturer_id: '6',
        manufacturer_name: 'fakemfr',
        category_id: '1',
        category_name: 'fakecat'
      }
    render(FeaturedMotorcycle, { featured: fakeFeatured })

    test("Expected header contains year, manufacturer, and model", () => {
      const header = screen.getByText("2019 fakemfr fakedemo")
      expect(header.tagName).toEqual('A')
      expect(header.getAttribute('href')).toEqual('/motorcycle/9')
    })

    test("Featured image should match moto ID", () => {
      const image = screen.getByRole('img')
      expect(image.getAttribute('src')).toEqual('/images/motorcycle_9.jpg')
    })
})
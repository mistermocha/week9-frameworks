import { render, screen } from "@testing-library/svelte";
import { it, test, expect, describe } from "vitest";
import MotorcycleTable from "./MotorcycleTable.svelte";

describe("Table rendering", () => {
  let fakeMotoList = [{
    id: '9',
    model: 'fakedemo',
    year: '2019',
    engine_cc: '11111',
    engine_hp: '22222',
    manufacturer_id: '6',
    manufacturer_name: 'fakemfr',
    category_id: '1',
    category_name: 'fakecat'
  }]
  render(MotorcycleTable, { motorcycles: fakeMotoList })
  const [thumb, year, manufacturer, model, category, engine]= screen.getAllByRole('cell')

  it("The first cell should have the image and the link", () => {
    expect(thumb.getElementsByTagName('a')[0].getAttribute('href')).toEqual('/motorcycle/9')
    expect(thumb.getElementsByTagName('img')[0].getAttribute('src')).toEqual('/images/motorcycle_9_thumb.jpg')
  })

  test("The second cell should have the year", () => {
    expect(year.innerHTML).toStrictEqual('2019')
  })
  
  test("The third cell should have the manufacturer & link", () => {
    expect(manufacturer.innerHTML).toEqual('<a href="/manufacturer/6">fakemfr</a>')
  })
  
  test("The fourth cell should have the model & link", () => {
    expect(model.innerHTML).toEqual('<a href="/motorcycle/9">fakedemo</a>')
  })
  
  test("The fifth cell should have the category & link", () => {
    expect(category.innerHTML).toEqual('<a href="/categories/1">fakecat</a>')
  })
  
  test("The sixth cell should have the engine cc & hp", () => {
    expect(engine.innerHTML).toEqual('11111cc, 22222hp')
  })
})
import { it, expect } from "vitest";
import { getVowelsCount } from "./vowel";

/**
 * Ejercicio: Escribe al menos 3 tests que comprueben si funciona correctamente la función getVowelsCount: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
 * 
 * 1. El primer test, que sea el mismo que el que podemos ver en CodeWars (cuidado que la sintaxis es diferente, CodeWars usa la suite de testng JEST + Chai, nosotros Vitest, sigue el ejemplo del ejercicio de ayer)
 * 2. El segundo test, un test "extremo", que pruebe un caso especial de este algoritmo
 * 3. El tercer test, uno aleatorio ideado por ti
 * 
 * Nota: No hay que tocar la función de vowel.js. En principio, debería estar bien :)
 */


    it("should return 5 for 'abracadabra'", () => {
        const result = getVowelsCount("abracadabra");
        expect(result).toBe(5);
    });

    it("should return 0 for 'bcdfghjklmnpqrstvwxyz'", () => {
        const result = getVowelsCount("bcdfghjklmnpqrstvwxyz");
        expect(result).toBe(0);
    });

    it("should return 2 for 'jkasdhf 344 kjsdhsajdh jkdsh skdjh'", () => {
        const result = getVowelsCount("jkasdhf kjsdh kjsdhsajdh jkdsh skdjh'");
        expect(result).toBe(2);
    });




/*
PROBLEM: 
  You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

  Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.
EXAMPLES: 
  lightsOn(5);        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

  lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
MENTAL MODEL:
  The first time through all lights are turned on (set to true). everything is divisible by one
  The second time through the loop the light divisible by 2 (trip number) through are toggled (set to false);
  The 3rd time though the loop lights are toggled according to position divisible by 3

DATA: 
  INPUT(s): Integer
  OUTPUT(s): Array of Integers
ALGORITHM: 
  SET an allLights obj with all lights set to false;
  SET result
  WHILE 1 through and including lastEl
    IF Light_Position divisible by idx
      toggle allLights[idx]
  WHILE Alllights
    If light == true
      push light to result
  RETURN result;
*/

function lightsOn(switches) {
  const lights = createLights(switches);
  const result = [];
  
  for (let i = 0; i < switches; i++) {
    Object.keys(lights).forEach((light) => {
      if (Number(light) % (i + 1) === 0) {
        lights[light] = !(lights[light]);
      }
    })
  }
  for (let light in lights) {
    if (lights[light]) {
      result.push(light)
    }
  }
  
  return result;
}

function createLights(n) {
  const lights = {};
  for (let i = 1; i <= n; i++) {
    lights[i] = false;
  }

  return lights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
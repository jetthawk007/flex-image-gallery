import { optionsToLowerCase } from './index'
const expected = {
    "width": 700,
    "minwidth": null,
    "maxwidth": "100%",
    "height": null,
    "minheight": null,
    "maxheight": null,
    "ratio": "700/467",
    "margin": 2,
    "glimpse": 0,
    "fit": "contain",
    "position": "50%",
    "thumbposition": "50%",
    "nav": "dots",
    "navposition": "bottom",
    "navwidth": null,
    "thumbwidth": 64,
    "thumbheight": 64,
    "thumbmargin": 2,
    "thumbborderwidth": 2,
    "thumbfit": "cover",
    "allowfullscreen": "native",
    "transition": "slide",
    "clicktransition": "crossfade",
    "transitionduration": 300,
    "captions": true,
    "hash": false,
    "startindex": 0,
    "loop": false,
    "autoplay": false,
    "stopautoplayontouch": true,
    "keyboard": false,
    "arrows": true,
    "click": true,
    "swipe": true,
    "trackpad": false,
    "enableifsingleframe": false,
    "controlsonstart": true,
    "shuffle": false,
    "direction": "ltr",
    "shadows": true,
    "spinner": null,
    "auto": true,
    "urtext": "\n    <img src=\"./img1.jpg\" alt=\"Test Car Image Caption\">\n    <a href=\"https://www.youtube.com/watch?v=rqUmm_AMa_0\">Desert Rose</a>\n    <img src=\"./img2.jpg\" alt=\"\">\n    <img src=\"./img3.jpg\" alt=\"\">\n    <img src=\"./img1.jpg\" alt=\"Test Car Image Caption\">\n    <img src=\"./img2.jpg\" alt=\"\">\n    <img src=\"./img3.jpg\" alt=\"\">\n    <img src=\"./img1.jpg\" alt=\"Test Car Image Caption\">\n    <img src=\"./img2.jpg\" alt=\"\">\n    <img src=\"./img3.jpg\" alt=\"\">\n    <img src=\"./img1.jpg\" alt=\"Test Car Image Caption\">\n    <img src=\"./img2.jpg\" alt=\"\">\n    <img src=\"./img3.jpg\" alt=\"\">\n  "
}

describe('optionsToLowerCase', () => {
  test('converts all keys to lowercase', () => {
    const options = { ...expected,  };

    const result = optionsToLowerCase(options);

    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        const lowercaseKey = key.toLowerCase();
        expect(key).toBe(lowercaseKey);
      }
    }
  });

  test('returns the expected object with lowercase keys', () => {
    const options = { ...expected }

    const result = optionsToLowerCase(options);

    expect(result).toEqual(expected);
  });
});
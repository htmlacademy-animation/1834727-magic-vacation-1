/**
 * Created by Kristina Kuznetsova <k.kristina.sdev@gmail.ru>
 * Date: 10.07.2021
 */

export default () => {
  const introTitle = document.querySelectorAll(`.intro__title`)[0];
  const introDate = document.querySelectorAll(`.intro__date`)[0];
  const sliderTitle = document.querySelectorAll(`.slider__item-title`)[0];
  const prizesTitle = document.querySelectorAll(`.prizes__title`)[0];
  const rulesTitle = document.querySelectorAll(`.rules__title`)[0];
  const gameTitle = document.querySelectorAll(`.game__title`)[0];
  const transformTitles = [introTitle, introDate, sliderTitle, prizesTitle, rulesTitle, gameTitle];
  const titleAnimationSettings = {
    mainCharSettings: {
      'animation-function': [
        {
          transform: `translateY(100%)`
        },
        {
          transform: `translateY(0)`
        }
      ],
      'animation-duration': 0.6,
      'animation-direction': `normal`,
      'animation-fill-mode': `both`
    },
    stringSettings: [
      {
        'animation-delay': 0.18,
        charSettings: [
          {
            "animation-delay": 0.08
          },
          {
            "animation-delay": 0.06
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.06
          },
          {
            "animation-delay": 0.04
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.08
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0.02
          },
        ]
      },
      {
        'animation-delay': 0.25,
        charSettings: [
          {
            "animation-delay": 0.05
          },
          {
            "animation-delay": 0.06
          },
          {
            "animation-delay": 0.04
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.05
          },
          {
            "animation-delay": 0.02
          },
        ]
      }
    ]
  };
  const introDateAnimationSettings = {
    mainCharSettings: {
      'animation-function': [
        {
          transform: `translateY(100%)`
        },
        {
          transform: `translateY(0)`
        }
      ],
      'animation-duration': 0.6,
      'animation-direction': `normal`,
      'animation-fill-mode': `both`
    },
    stringSettings: [
      {
        'animation-delay': 0.1,
        charSettings: [
          {
            "animation-delay": 0.04
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.02
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.05
          },
          {
            "animation-delay": 0.02
          },
          {
            "animation-delay": 0.05
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0.06
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.02
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0.03
          },
          {
            "animation-delay": 0.02
          },
        ]
      },
    ]
  };

  const setAnimation = function (el, animationSettings) {
    const textStrings = el.querySelectorAll(`.animate-text--string`);
    textStrings.forEach((currentString, index)=>{
      const stringChars = currentString.querySelectorAll(`span`);
      stringChars.forEach((currentChar, charIndex)=>{
        currentChar.animate(animationSettings.mainCharSettings[`animation-function`], {
          duration: animationSettings.mainCharSettings[`animation-duration`] * 1000,
          direction: animationSettings.mainCharSettings[`animation-direction`],
          delay: (animationSettings.stringSettings[index][`animation-delay`] + animationSettings.stringSettings[index].charSettings[charIndex][`animation-delay`]) * 1000,
          fill: animationSettings.mainCharSettings[`animation-fill-mode`]
        });
      });
    });

  };

  const transformText = function (el) {
    const textStrings = el.innerHTML.split(`<br>`);

    let formattedContent = textStrings.reduce((acc, currentString)=> {
      let formattedString = ``;
      for (let i = 0; i < currentString.length; i++) {
        formattedString += `<span>${currentString.charAt(i)}</span>`;
      }
      acc += `<span class="animate-text--string">${formattedString}</span>`;
      return acc;
    }, ``);
    el.innerHTML = formattedContent;
  };

  for (let i = 0; i < transformTitles.length; i++) {
    transformText(transformTitles[i]);
  }

  document.body.addEventListener(`screenChanged`, function (params) {
    let animateTitle;
    switch(params.detail.screenId) {
        case 0:
          animateTitle = introTitle;
          setAnimation(introDate, introDateAnimationSettings);
          break;
        case 1:
          animateTitle = sliderTitle;
          break;
        case 2:
          animateTitle = prizesTitle;
          break;
        case 3:
          animateTitle = rulesTitle;
          break;
        case 4:
          animateTitle = gameTitle;
          break;
      }
    setAnimation(animateTitle, titleAnimationSettings);
  });
};

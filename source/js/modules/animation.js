/**
 * Created by Kristina Kuznetsova <k.kristina.sdev@gmail.ru>
 * Date: 10.07.2021
 */

export default () => {
  const introTitle = document.querySelectorAll(`.intro__title`)[0];
  const introTitleAnimationSettings = {
    mainCharSettings: {
      'animation-name': `charFadeInUp`,
      'animation-duration': `0.86s`,
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

  const setAnimation = function (el, animationSettings) {
    const textStrings = el.innerHTML.split(`<br>`);

    let formattedContent = textStrings.reduce((acc, currentString, index)=> {
      let formattedWord = ``;
      for (let i = 0; i < currentString.length; i++) {
        formattedWord += `<span style="animation-name: ${animationSettings.mainCharSettings[`animation-name`]};
                            animation-duration: ${animationSettings.mainCharSettings[`animation-duration`]};
                            animation-direction: ${animationSettings.mainCharSettings[`animation-direction`]};
                            animation-fill-mode: ${animationSettings.mainCharSettings[`animation-fill-mode`]};
                            animation-delay: ${animationSettings.stringSettings[index][`animation-delay`] + animationSettings.stringSettings[index].charSettings[i][`animation-delay`]}s;
              ">${currentString.charAt(i)}</span>`;
      }
      acc += `<span>${formattedWord}</span>${index !== textStrings.length - 1 ? `<br>` : ``}`;
      return acc;
    }, ``);
    el.innerHTML = formattedContent;
  };

  setAnimation(introTitle, introTitleAnimationSettings);
};

"use strict";

window.onload = () => {
  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    return advice;
  };

  const setAdvice = async () => {
    document.getElementById("AdviceText").innerHTML = "Loading...";
    getAdvice()
      .then((response) => {
        const {
          slip: { id, advice },
        } = response;
        document.getElementById("AdviceTitle").innerHTML = `Advice #${id}`;
        document.getElementById("AdviceText").innerHTML = `"${advice}"`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setAdvice();

  document.getElementById("Dice").addEventListener("click", setAdvice);
};

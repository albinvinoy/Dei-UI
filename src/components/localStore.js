import React from "react";

export default function localStore(
  englishQuestion,
  englishAnswer,
  malayalamQuestion,
  malayalamAnswer,
  currentImage,
  displayAnswer,
  displayImage,
  multiView,
  englishPrompt,
  malayalamPrompt
) {
  let viewSave = {
    englishQuestion: englishQuestion,
    englishAnswer: englishAnswer,
    malayalamQuestion: malayalamQuestion,
    malayalamAnswer: malayalamAnswer,
    currentImage: currentImage,
    displayAnswer: displayAnswer,
    displayImage: displayImage,
    multiView: multiView,
    englishPrompt: englishPrompt,
    malayalamPrompt: malayalamPrompt
  };
  console.info("Saving data to local storage.");
  localStorage.setItem("viewSave", JSON.stringify(viewSave));
}

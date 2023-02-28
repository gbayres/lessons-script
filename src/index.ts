// Esse script já está considerando o novo modelo em que só existe a detailedTree.
// Quando a lesson for cadastrada, ela será atrelado a IDs de classificações
// O array de lessons a seguir representa as aulas dispostas em ordem cronológica crescente (da mais antiga pra mais recente).
// Esse script vai "excluir" aulas antigas que já foram completamente abraçadas por aulas mais novas
// Exemplo: Se a aula 1 abraça "ID 1", a aula 2 abraça "ID 2" e a aula 3 abraça "ID 1 + ID 2", o script só retornará a aula 3

let lessons: string[][] = [
  ['ID 1', 'ID 2'],
  ['ID 3'],
  ['ID 4', 'ID 2'],
  ['ID 1'],
  ['ID 2'],
  ['ID 5'],
  ['ID 4'],
  ['ID 6'],
  ['ID 6', 'ID 4'],
  ['ID 6', 'ID 2', 'ID 7'],
  ['ID 6', 'ID 2', 'ID 7'],
  ['ID 3', 'ID 1'],
];

function rearrangeLessons(lessons: string[][]) {
  let flatLessons = lessons.flat();
  let newLessons: string[][] = [];
  let flatLessonsPosition = 0;

  for (let lessonIndex = 0; lessonIndex < lessons.length; lessonIndex++) {
    let outdatedContents = 0;

    for (let contentIndex = 0; contentIndex < lessons[lessonIndex].length; contentIndex++) {
      flatLessonsPosition += 1;
      let currContent = lessons[lessonIndex][contentIndex];
      let moreRecentLessons = flatLessons.slice(flatLessonsPosition);
      let nextContentsIncludeCurrContent = moreRecentLessons.includes(currContent);
      
      if (nextContentsIncludeCurrContent) {
        outdatedContents += 1;
      }

      let notAllContentsInLessonAreOutdated = (lessons[lessonIndex].length !== outdatedContents);
      let isAtTheLastIndexOfLessonContents = lessons[lessonIndex].length === contentIndex + 1;

      if (notAllContentsInLessonAreOutdated && isAtTheLastIndexOfLessonContents) {
        newLessons.push(lessons[lessonIndex]);
      }
    }
  
  }
  return newLessons;
}

console.log(rearrangeLessons(lessons));

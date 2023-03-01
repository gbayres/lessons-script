// Esse script já está considerando o novo modelo em que só existe a detailedTree.
// Quando a lesson for cadastrada, ela será atrelado a IDs de classificações
// O array de lessons a seguir representa as aulas dispostas em ordem cronológica crescente (da mais antiga pra mais recente).
// Esse script vai "excluir" aulas antigas que já foram completamente abraçadas por aulas mais novas
// Exemplo: Se a aula 1 abraça "ID 1", a aula 2 abraça "ID 2" e a aula 3 abraça "ID 1 + ID 2", o script só retornará a aula 3

type LessonType = {
  lessonId: string,
  classifications: string[],
}

let lessons: LessonType[] = [
  { lessonId: 'Lesson 1', classifications: ['Classification 1', 'Classification 2'] },
  { lessonId: 'Lesson 2', classifications: ['Classification 3'] },
  { lessonId: 'Lesson 3', classifications: ['Classification 4', 'Classification 2'] },
  { lessonId: 'Lesson 4', classifications: ['Classification 1'] },
  { lessonId: 'Lesson 5', classifications: ['Classification 2'] },
  { lessonId: 'Lesson 6', classifications: ['Classification 5'] },
  { lessonId: 'Lesson 7', classifications: ['Classification 4'] },
  { lessonId: 'Lesson 8', classifications: ['Classification 6'] },
  { lessonId: 'Lesson 9', classifications: ['Classification 6', 'Classification 4'] },
  { lessonId: 'Lesson 10', classifications: ['Classification 6', 'Classification 2', 'Classification 7'] },
  { lessonId: 'Lesson 11', classifications: ['Classification 6', 'Classification 2', 'Classification 5'] },
  { lessonId: 'Lesson 12', classifications: ['Classification 3', 'Classification 1'] },
  { lessonId: 'Lesson 13', classifications: ['Classification 6', 'Classification 4', 'Classification 2', 'Classification 7'] },
];

function rearrangeLessons(lessons: LessonType[]) {
  const rearrangedLessons: LessonType[] = [];
  const arrayOfClassifications = lessons.map(x => x.classifications);
  const flatArrayOfClassifications = arrayOfClassifications.flat();
  let flatArrayOfClassificationsPosition = 0;

  for (let lessonIndex = 0; lessonIndex < arrayOfClassifications.length; lessonIndex++) {
    let outdatedClassifications = 0;

    for (let classificationIndex = 0; classificationIndex < arrayOfClassifications[lessonIndex].length; classificationIndex++) {
      flatArrayOfClassificationsPosition += 1;
      let currClassification = arrayOfClassifications[lessonIndex][classificationIndex];
      let nextClassifications = flatArrayOfClassifications.slice(flatArrayOfClassificationsPosition);
      let nextClassificationsIncludeCurrClassification = nextClassifications.includes(currClassification);
      
      if (nextClassificationsIncludeCurrClassification) {
        outdatedClassifications += 1;
      }

      let notAllClassificationsInLessonAreOutdated = (arrayOfClassifications[lessonIndex].length !== outdatedClassifications);
      let isAtTheLastIndexOfLessonClassifications = arrayOfClassifications[lessonIndex].length === classificationIndex + 1;

      if (notAllClassificationsInLessonAreOutdated && isAtTheLastIndexOfLessonClassifications) {
        rearrangedLessons.push(lessons[lessonIndex]);
      }
    }
  
  }
  return rearrangedLessons;
}

console.log(rearrangeLessons(lessons));

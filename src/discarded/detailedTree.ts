// type detailedTreeItemType = {
//     content: string,
//     lastFinishedAt?: Date,
// }

// let detailedTree: detailedTreeItemType[] = [
//     {
//         content: 'Parto I',
//         lastFinishedAt: new Date('2022-02-03T20:55:51.745Z'),
//     },
//     {
//         content: 'Parto II',
//         lastFinishedAt: new Date('2022-04-02T20:55:51.745Z'),
//     },
//     {
//         content: 'Parto III',
//         lastFinishedAt: new Date('2022-06-05T20:55:51.745Z'),
//     },
//     {
//         content: 'Parto IV',
//         lastFinishedAt: new Date('2022-06-05T20:55:51.745Z'),
//     },
// ];

// type LessonType = {
//     contents: string[],
//     finishedAt: Date,
// }

// let lessons: LessonType[] = [
//     {
//         contents: ['Parto I'],
//         finishedAt: new Date('2022-02-03T20:55:51.745Z'),
//     },
//     {
//         contents: ['Parto II'],
//         finishedAt: new Date('2022-04-02T20:55:51.745Z'),
//     },
//     {
//         contents: ['Parto III', 'Parto IV'],
//         finishedAt: new Date('2022-06-05T20:55:51.745Z'),
//     }
// ];

// function updateDetailedTree(content: string) {
//   const index = detailedTree.findIndex(item => item.content === content);
//   if (index !== -1) {
//     detailedTree[index].lastFinishedAt = new Date();
//   } else {
//     detailedTree.push({
//       content,
//       lastFinishedAt: new Date(),
//     });
//   }
// }

// function finishLesson(contents: string[]) {
//     lessons.push({
//         contents,
//         finishedAt: new Date(),
//     })
//     contents.forEach(updateDetailedTree);
// }

// function checkIfNewerLessonsExist(content: string, finishedAt: Date) {
//     const _content = detailedTree.find(item => item.content === content);
//     const lastFinishedAt = _content ? _content.lastFinishedAt : undefined;
//     return lastFinishedAt && (lastFinishedAt.getTime() > finishedAt.getTime());
// }

// function checkIfAllLessonContentsAreOutdated(lesson: LessonType) {
//     return lesson.contents.every(content => checkIfNewerLessonsExist(content, lesson.finishedAt));
// }

// function overlapFilter() {
//     return lessons.filter(lesson => !checkIfAllLessonContentsAreOutdated(lesson));
// }

// finishLesson(['Parto I', 'Parto II']);
// console.log(overlapFilter());
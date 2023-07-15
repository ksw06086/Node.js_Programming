// 파일 감시(수정되거나 삭제될 시 이벤트를 발생시킴)
const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});
// 실행 결과(실행 후에 바로 무언가 뜨지 않음)
// 수정 시 -> change target.txt
// 파일명 변경 또는 파일 삭제 후 -> rename target.txt
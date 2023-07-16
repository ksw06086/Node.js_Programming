    async function getUser() {
        try {
            const res = await axios.get('/users');
            const users = res.data; // axios.get('/users')로 가져온 데이터 대입
            const list = document.getElementById('list'); // 가져온 users 데이터 넣어줄 태그
            list.innerHTML = ''; // 비우기
            // 사용자마다 반복적으로 화면 표시 및 이벤트 연결(key별 실행로직)
            Object.keys(users).map(function (key) {
                const userDiv = document.createElement('div');
                const span = document.createElement('span');
                span.textContent = users[key];
                // 수정 버튼 생성
                const edit = document.createElement('button');
                edit.textContent = '수정';
                edit.addEventListener('click', async () => {
                    const name = prompt('바꿀 이름을 입력하세요.');
                    if(!name){
                        return alert('이름을 반드시 입력하셔야 합니다.');
                    }
                    try {
                        await axios.put('/user/' + key, { name });
                        getUser();
                    } catch (error) {
                        console.error(error);
                    }
                });
                // 삭제 버튼 생성
                const remove = document.createElement('button');
                remove.textContent = '삭제';
                remove.addEventListener('click', async () => {
                    try {
                        await axios.delete('/user/' + key);
                        getUser();
                    } catch (error) {
                        console.error(error);
                    }
                });
                userDiv.appendChild(span); // div에 이름 넣어주기
                userDiv.appendChild(edit); // div에 수정버튼 넣어주기
                userDiv.appendChild(remove); // div에 삭제버튼 넣어주기
                list.appendChild(userDiv); // list에 div 넣어주기
                console.log(res.data);
            })
        } catch (error) {
            console.error(error);
        }
    }

    window.onload = getUser; // 화면 로딩 시 getUser 호출(user 리스트에 값이 있으면 로드 하자마자 뿌려줌)
    // 폼 제출(submit) 시 실행
    document.getElementById('submit').addEventListener('submit', async (e) => {
        e.preventDefault(); // submit 하면 다음페이지로 넘어가는데 넘어가지 않게 동작 못하게 하는 메서드
        const name = e.target.username.value; // e.target은 제출한 데이터를 가리키게 됨. id/name 상관없음
        if (!name) {
            return alert('이름을 입력하세요.');
        }
        try {
            await axios.post('/user', { name }); // axios는 ajax 요청 느낌, . 이후는 method type을 가리킴
            getUser();
        } catch (error) {
            console.error(error);
        }
        e.target.username.value = '';
    });

export const getProblemList = () => {
    //아래주소로 서버에게 요청
    return fetch("http://localhost:8000/problems")
    .then(res => res.json());
};
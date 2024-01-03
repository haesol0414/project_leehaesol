// 한 자리 숫자일 경우 앞에 0을 채워 넣는 함수
export const formatIndex = num => String(num).padStart(2, '0');

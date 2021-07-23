package com.kh.exam2;

public class EscapeChar {

	public static void main(String[] args) {
		/*
		 * 이스케이프 문자
		 * 프로그래밍 코드에서 사용하는 문자가 문자열에 사용하는 문자와 중첩되는 경우
		 * 프로그램이 중첩된 의미를 제대로 구분하지 못하기 때문에 구분할 수 있는 추가 문자로
		 * 이스케이프 문자라는 것을 사용한다.
		 * 
		 * 이스케이프 문자는 \(역슬래쉬) 문자와의 조합으로 만들어진다.
		 * 
		 * 대표적인 이스케이프 문자는 이런것들이 있다.(아래참고)
		 * \n : 문자열 안에서 개행(엔터)의 기능을 사용하기 위해 쓰임.
		 * \r : 문자열 앙네서 커서의 위치를 해당 줄의 앞으로 이동시키기 위해 쓰임.(깜박거리는 ㅣ 짝대기가 커서임)
		 * \t : 문자열 안에서 탭 공백(실제ㄴㄴ 의미상 8칸의 공백)을 사용하기 위해 쓰임.
		 * \" : 문자열 안에서 쌍따움표 문자를 사용하기 위해 쓰임.
		 * \' : 문자열 안에서 홀따옴표 문자를 사용하기 위해 쓰임.
		 * \\ : 문자열 안에서 역슬래쉬 문자를 사용하기 위해 쓰임.
		 */
		System.out.println("안녕\"자바\"수업시작");
		System.out.println("abcd\t");
		System.out.println("abc\t");
		System.out.println("ab\t");//마우스로 드레그해보면 공백있음.
		//문자가 9개면 그러면 앞에 8글자 빼고 다시 8글자 맞추기 위해서 공백을 마련합니다
        // 주로 표나 테이블을 만들때 많이 씀. 일정한 영역을 주고 내용을 작성을 하는 경우가 많다보니!
		//얘가 딱 8칸 공간을 만들어 주잖아.
		//한글 조합해서 \t 사용하지 마! 그럼 원하는 결과 안나와.
		System.out.println("abcd\r12"); //Eclipse의 콘솔에서는 적용이 안되어 확인 안됨.
		System.out.println("ab'b'bb");//"안에서 ' 쓰는건 어차피 구분되니 \' 안해줘도 됨. 아닐경우 \'사용.
		

	}

}

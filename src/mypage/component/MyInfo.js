import "./MyInfo.css"
export default function MyInfo(){
    return (
        <div className="my-info-page">
            <div className="top-text">
                나의 기본정보
            </div>
            <div className="body-container">
                <div className="padding-box">
                    <div className="input-text-box">
                        <input type="text" disabled="true" value="name"/>
                    </div>
                    <div className="input-text-box">
                        <input type="text" disabled="true" value="kakao..."/>
                    </div>
                    <div className="input-text-box">
                        <input type="text" placeholder="비밀번호 (8~16자리 영문/숫자 조합)" />
                    </div>
                    <div data-v-2ecae326="" className="special_signInfo">※ 특수기호는 ! @ # $ % ^ * + = - 가능합니다</div>
                    <div className="input-text-box">
                        <input type="text" placeholder="비밀번호 확인 (8~16자리 영문/숫자 조합)" />
                    </div>
                    <div className="number-area">
                        <div className="number-area-left">
                            <div>
                                <select disabled="true" className="alvolo-select">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="019">019</option>
                                </select>
                            </div>
                        </div>
                        <div className="number-area-right">
                            <div className="input-number-box">
                                <input type="number" disabled="true" placeholder="12341234" />
                                <span className="btn-modify-number-gray">수정</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="collapse-box">*/}
                {/*    <h5>휴대전화 인증 후 변경이 가능합니다.</h5>*/}
                {/*    <h6>변경할 휴대전화 번호를 입력하세요.</h6>*/}
                {/*    <div className="number-area-in">*/}
                {/*        <div className="number-area-left-in">*/}
                {/*            <div>*/}
                {/*                <select className="alvolo-select">*/}
                {/*                    <option value="010">010</option>*/}
                {/*                    <option value="011">011</option>*/}
                {/*                    <option value="016">016</option>*/}
                {/*                    <option value="017">017</option>*/}
                {/*                    <option value="019">019</option>*/}
                {/*                </select>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="pc-number-area-right-in">*/}
                {/*            <div className="alvolo-input-auth">*/}
                {/*                <input type="number" placeholder="12341234" className="alvolo-input-default" />*/}
                {/*                <span className="btn-modify-number-gray"> 인증번호 발송</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="pc-numer-area-auth alvolo-input-auth">*/}
                {/*            <input type="number" placeholder="인증번호" className="alvolo-input-default" />*/}
                {/*            <span className="btn-auth-number btn-auth-gray"> 인증번호 확인</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="padding-box2">
                    <div className="input-text-box">
                        <input type="text" disabled="true" value="birthday"/>
                    </div>
                    <div className="mail-area">
                        <div className="mail-area-left">
                            <div className="alvolo-input">
                                <input type="text" placeholder="이메일" onInput="" className="input-defalut" />
                            </div>
                        </div>
                        @
                        <div className="mail-area-right">
                            <input type="text" placeholder="직접입력" className="mail-area-right-direct" />
                            <div className="select-box">
                                <select className="alvolo-select">
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="direct">직접입력</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="box-text-alvolo-input-auth">
                        <input type="address" disabled="true" placeholder="주소" className="alvolo-input-default"/>
                        <span className="btn-modify-number-gray"> 주소찾기</span>
                    </div>
                    <div className="box-text-alvolo-input-auth">
                        <input type="text" placeholder="상세주소 입력" disabled="true" onInput="" className="input-default"/>
                    </div>
                    <div className="membership-check-toggle">
                        <div className="check-toggle">
                            <div className="check_toggle_whole">
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                                    className="checkImg" />
                                <div className="toggle-txt"></div>
                            </div>
                        </div>
                        <div className="context">SMS 수신 동의</div>
                        <div className="check-toggle">
                            <div className="check_toggle_whole">
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0idW5jaGVrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1vcGFjaXR5OiAwOwogICAgICAgIHN0cm9rZTogI2NjYzsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2NjOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBpZD0iRWxsaXBzZV8yX2NvcHlfMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDIgY29weSAyIiBjbGFzcz0iY2xzLTEiIGN4PSIyNyIgY3k9IjI3IiByPSIyNiIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMiIgZD0iTTU0LjA1Myw3NTcuNTY3bC0xMC4yNi0xMC45MjhMNDEsNzQ5LjM1Niw1NC4wNTMsNzYzLDcyLDc0My43MTYsNjkuMjA2LDc0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOSAtNzI0KSIvPgo8L3N2Zz4K"
                                     className="checkImg" />
                                <div className="toggle-txt"></div>
                            </div>
                        </div>
                        <div className="context">E-mail 수신 동의</div>
                    </div>
                </div>
                <div className="edit-membership-button-container">
                    <div className="gray-button">취소</div>
                    <div className="blue-button">확인</div>
                </div>
            </div>
        </div>
    )
}
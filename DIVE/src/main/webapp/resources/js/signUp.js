	function checkAll() {
			if (!checkUserId(form.userId.value)) {
				form.userId.focus();
				return false;
			}
			if (!checkPassword(form.userId.value, form.password.value,
					form.userPwCheck.value)) {
				return false;
			}
			if (!checkName(form.name.value)) {
				return false;
			}
			if (!checkBirthday(form.birthday.value)) {
				return false;
			}
			if (!checkAddress(form.address.value)) {
				return false;
			}
			if (!checkmPhone2(form.mPhone2.value)) {
				return false;
			}
			if (!checkMail(form.email.value)) {
				return false;
			}
			alert("회원가입 성공");
			return true;
		}

		// 공백확인 함수
		function checkExistData(value, dataName) {
			if (value == "") {
				alert(dataName + " 입력해주세요!");
				return false;
			}
			return true;
		}

		function checkUserId(userId) {
			//Id가 입력되었는지 확인하기
			if (!checkExistData(userId, "아이디를")) {
				form.userId.focus();
				return false;
			}

			var idRegExp = /^[a-zA-z0-9]{4,12}$/; //아이디 유효성 검사
			if (!idRegExp.test(userId)) {
				alert("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
				form.userId.value = "";
				form.password.focus();
				return false;
			}
			return true; //확인이 완료되었을 때
		}

		function checkPassword(id, password, userPwCheck) {
			//비밀번호가 입력되었는지 확인하기
			if (!checkExistData(password, "비밀번호를")) {
				form.password.focus();
				return false;
			}
			//비밀번호 확인이 입력되었는지 확인하기
			if (!checkExistData(userPwCheck, "비밀번호 확인을")) {
				form.userPwCheck.focus();
				return false;
			}
			var passwordRegExp = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사
			if (!passwordRegExp.test(password)) {
				alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
				form.password.value = "";
				form.userPwCheck.value = "";
				form.password.focus();
				return false;
			}
			//비밀번호와 비밀번호 확인이 맞지 않다면..
			if (password != userPwCheck) {
				alert("두 비밀번호가 맞지 않습니다.");
				form.password.value = "";
				form.userPwCheck.value = "";
				form.userPwCheck.focus();
				return false;
			}
			//아이디와 비밀번호가 같을 때..
			if (id == password) {
				alert("아이디와 비밀번호는 같을 수 없습니다!");
				form.password.value = "";
				form.userPwCheck.value = "";
				form.password.focus();
				return false;
			}
			return true; //확인이 완료되었을 때
		}

		function checkName(name) {
			if (!checkExistData(name, "이름을")) {
				form.name.focus();
				return false;
			}
			var nameRegExp = /^[가-힣]{2,5}$/;
			if (!nameRegExp.test(name)) {
				alert("이름이 올바르지 않습니다.");
				form.name.value = "";
				form.name.focus();
				return false;
			}
			return true; //확인이 완료되었을 때
		}

		function checkBirthday(birthday) {
			if (!checkExistData(birthday, "생년월일을")) {
				form.birthday.focus();
				return false;
			}
			var birthdayRegExp = /^[1-2]{1}[0-9]{3}[0-1]{1}[0-9]{1}[0-3]{1}[0-9]{1}$/;
			if (!birthdayRegExp.test(birthday)) {
				alert("생년월일 형식이 올바르지 않습니다.");
				form.birthday.value = "";
				form.birthday.focus();
				return false;
			}
			return true; //확인이 완료되었을 때
		}

		function checkAddress(address) {
			if (!checkExistData(address, "주소를")) {
				form.address.focus();
				return false;
			}

			var addressRegExp = /^[가-힣]{10,20}$/;
			if (!addressRegExp.test(address)) {
				alert("주소가 올바르지 않습니다.");
				form.address.value = "";
				form.address.focus();
				return false;
			}

			return true; //확인이 완료되었을 때
		}

		function checkmPhone2(mPhone2) {
			if (!checkExistData(mPhone2, "번호를")) {
				form.mPhone2.focus();
				return false;
			}
			var mPhone2RegExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;

			if (!mPhone2RegExp.test(mPhone2)) {
				alert("번호가 올바르지 않습니다.");
				form.mPhone2.value = "";
				form.mPhone2.focus();
				return false;
			}
			return true; //확인이 완료되었을 때
		}

		function checkMail(email) {
			//mail이 입력되었는지 확인하기
			if (!checkExistData(email, "이메일을")) {
				form.email.focus();
				return false;
			}
			var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
			if (!emailRegExp.test(email)) {
				alert("이메일 형식이 올바르지 않습니다!");
				form.email.value = "";
				form.email.focus();
				return false;
			}
			return true; //확인이 완료되었을 때
		}
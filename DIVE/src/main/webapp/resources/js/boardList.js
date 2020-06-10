$(document).ready(function(){
	
	//페이징 이벤트 처리
	var actionForm = $('#actionForm');
    $('.pagingBtn').on('click', function(e) {
		e.preventDefault();
		
		var choosedPage = $(this).attr('href');
		actionForm.find("input[name='pageNum']").val(choosedPage);
		
		actionForm.submit();
	});
    
    //게시글 상세보기
    $('.detailPost').on('click', function(e) {
    	e.preventDefault();
    	actionForm.append("<input type='hidden' name='id' value='"+$(this).attr('href')+"'/>");
    	actionForm.attr("action","/board/detailPost");
    	actionForm.submit();
	});
    
    //게시판 검색 
    var searchForm = $('#searchForm');
    $('#searchBtn').on('click', function(e) {
		if(!searchForm.find("option:selected").val()){
			alert("검색종류를 선택하세요.");
			return false;
		}
		
		if(!searchForm.find("input[name='keyword']").val()){
			alert("키워드를 입력하세요.");
			return false;
		}
		
		searchForm.find("input[name='pageNum']").val("1");
		e.preventDefault();
		
		searchForm.submit();
	});
});
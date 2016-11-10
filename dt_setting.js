jQuery(function($){
	$.extend( $.fn.dataTable.defaults, {
		/*language: { url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json" }*/
	});

	$("#chara-table").dataTable({
		// 件数切替機能 無効
		lengthChange: false,
		// 検索機能 有効
		searching: true,
		// ソート機能 有効
		ordering: true,
		// 情報表示 無効
		info: false,
		// ページング機能 無効
		paging: false
		// 横スクロールバーを有効にする (scrollXはtrueかfalseで有効無効を切り替えます)
		scrollX: true,	
		// 縦スクロールバーを有効にする (scrollYは200, "200px"など「最大の高さ」を指定します)
		scrollY: 200
    
	});
});

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
		paging: false,
		//scrollX: true//,
		scrollY: 600
	});
	$("#chara-table-phone").dataTable({
		// 件数切替機能 無効
		lengthChange: false,
		// 検索機能 有効
		searching: true,
		// ソート機能 有効
		ordering: true,
		// 情報表示 無効
		info: false,
		// ページング機能 無効
		paging: false,
		//scrollX: true//,
		scrollY: 300
	});
});

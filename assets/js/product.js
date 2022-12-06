$(".sliderThumb").click(function() {
  n = $(".sliderThumb").index(this);
  let new_src = $(".sliderThumb").eq(n).attr("src");
  $(".sliderMainImage").attr("src", new_src);
})
let amount = $(".amount");
let def_amount = 1;
$(".increase").click(function() {
  def_amount += 1;
  amount.text(`${def_amount}`);
})

$(".decrease").click(function() {
  if (def_amount == 0){
    return
  }else{
    def_amount -= 1;
  amount.text(`${def_amount}`);
  }
});


$(() =>{
  const tab_switchers = $("[data-switcher]");

  for (let i = 0; i < tab_switchers.length; i++){
    const tab_switcher = tab_switchers.eq(i);
    const page_id = tab_switcher.attr("data-tab");
    tab_switcher.click(() =>{
      $(".nav-link.active").removeClass("active");
      tab_switcher.addClass("active");
      
      switchSection(page_id);
    })
  }
})

switchSection = function (page_id){
  const current_page = $(".prod-detailes.active");
  current_page.removeClass("active");
  const next_page = $(`[data-page="${page_id}"]`);
  next_page.addClass("active");
}
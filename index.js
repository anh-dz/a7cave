var passwords=['NGUYỄN CÔNG THÀNH AN', 'NGUYỄN DUY ANH', 'NGUYỄN MAI NHẬT ANH', 'NGUYỄN QUANG ANH', 'BÙI ĐỨC BẰNG', 'TRẦN ĐÔNG BÌNH', 'PHẠM CHÍ CƯƠNG', 'VŨ MẠNH CƯỜNG', 'LÊ VĂN DŨNG', 'NGUYỄN ĐỨC DUY', 'LÊ ANH DƯƠNG', 'ĐÀO TIẾN ĐẠT', 'NGUYỄN THÁI HIỂN', 'DƯƠNG CÔNG HUY', 'NGUYỄN NHẬT HUY', 'NGUYỄN QUỐC HUY', 'PHẠM QUỐC HUY', 'KHÚC NAM KHÁNH', 'NGÔ NAM KHÁNH', 'NGUYỄN GIA KHIÊM', 'NGUYỄN ĐĂNG KHÔI', 'ĐẶNG TIẾN MẠNH', 'ĐINH TUẤN MINH', 'NGUYỄN ĐỨC MINH', 'HOÀNG HỮU NGHĨA', 'VĂN ĐỨC QUÂN', 'NGUYỄN MINH SƠN', 'NGUYỄN HUY THÀNH', 'HOÀNG ĐỨC THẮNG', 'LÊ VĂN TRUNG', 'NGUYỄN NAM LINH']
;var indexOld;var index=Math.floor((Math.random()*passwords.length));var password=passwords[index];var characters=[];var counter=0;var interval=setInterval(function(){for(i=0;i<counter;i++){characters[i]=password.charAt(i);}
for(i=counter;i<password.length;i++){characters[i]=Math.random().toString(36).charAt(2);}
$('.password').text(characters.join(''));},25);function hack(){counter++;if(counter==password.length){$('.granted, .rerun').removeClass('hidden');}}
$(window).on('keydown',hack);$('.password').on('click',hack);$('.rerun').on('click',function(){indexOld=index;do{index=Math.floor((Math.random()*passwords.length));}while(index==indexOld);$('.granted, .rerun').addClass('hidden');password=passwords[index];characters=[];counter=0;});$('.start').on('click',function(){$(this).addClass('hidden');$('.info p:last-child, .password').removeClass('hidden');});
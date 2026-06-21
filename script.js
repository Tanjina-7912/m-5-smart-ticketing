 let count =0;
 let totalSeat=40;
 let totalPrice=0;
 let grandTotal=0;
 let discount=0;
 const seats=document.getElementsByClassName('seat');
 for(const seat of seats){
    seat.addEventListener('click',function(event){
        if(count>=4){
            return;
        }
        else{
            // change seat color
            seat.classList.add('selected-seat');
            // adding seat
            addSeat(seat);
            count++;
            document.getElementById('seat-count').innerText=count;
                        totalSeat--;
            document.getElementById('available-seat').innerText=totalSeat;

            event.target.setAttribute('disabled',true);
            totalPrice=count*550;
            document.getElementById('total-price').innerText=totalPrice;
            grandTotal =totalPrice;
            document.getElementById('grand-total').innerText=grandTotal;
                }
    })
 }
function couponCheck(){
    if(count ==1 || count == 2 || count == 3|| count == 4){
      document.getElementById('btn-apply').removeAttribute('disabled',true);
      const coupon =document.getElementById('coupon-code').value;  
      if(coupon === 'NEW15'){
        discount=grandTotal*0.15;
        grandTotal=grandTotal - discount;
        document.getElementById('grand-total').innerText=grandTotal;
        document.getElementById('coupon-field').classList.add('hidden');


      }
      else if(coupon ==="couple 20"){
         discount=grandTotal*0.20;
        grandTotal=grandTotal - discount;
        document.getElementById('grand-total').innerText=grandTotal;
        document.getElementById('coupon-field').classList.add('hidden');
      }
      else{
        alert('coupon is invalid');
      
      }
    }
    else{
        document.getElementById('btn-apply').setAttribute('disabled',true);
     

    }
}
function addSeat(seat){
    const seatInfo =document.getElementById('seat-info');
    const seatName =document.createElement('p');
    const seatClass=document.createElement('p');
    const seatPrice=document.createElement('p');
    seatName.innerText=seat.innerText;
    seatPrice.innerText='550';
    seatClass.innerText='Economy';
    seatInfo.appendChild(seatName);
    seatInfo.appendChild(seatClass);
    seatInfo.appendChild(seatPrice);
}
function validateForm(){
    let name=document.getElementById('name').value;
    let number=document.getElementById('number').value;
    let email=document.getElementById('email').value;

    if(name === "" || number === ""|| email === ""){
alert('please fill in all fields');
    }
    else{
        document.getElementById('successModal').showModal();
     
        
        
    }
}
function closeModal(){
    document.getElementById('successModal').close();
}
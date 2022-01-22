//import MyStyle from components
import MyStyle from '../../components/myStyle/MyStyle.jsx';

export default function caseStyle(){
   return (
       <div>
           <MyStyle number={2} bgColor={"lightgray"}/>
           <MyStyle number={10} textRight/>
           <MyStyle number={11} />
           <p>Those are components with conditional styling</p>
       
       </div>
   )
}
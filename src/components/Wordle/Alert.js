export const Alert = ({mode}) => {
  return (
   <div className= {"Alert "+ (mode ? 'Alert_Show':'Alert_Hide') } >
       Not in Word List 
   </div>
  );
};

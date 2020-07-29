import java.util.Scanner;


public class IF1 {
    public static void main(String[] args) {
        System.out.print("กรอกข้อมูล1 : ");
        Scanner Text1=new Scanner(System.in);
        int tt1 = Text1.nextInt();
        //System.out.println(tt1);

        System.out.print("กรอกข้อมูล2 : ");
        int tt2 = Text1.nextInt();
        System.out.println(tt1);
        System.out.println(tt2);

    
        
        if(tt1 == tt2){
            System.err.println("ปิด");
            
        }
        if(tt1 != tt2){
            System.out.println("ใส่อีกครั้ง : ");  
            
            //for (int i = 0; i < 5; i++)
           
        }
    }
}
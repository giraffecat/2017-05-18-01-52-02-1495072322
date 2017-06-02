
public class Manager extends Employee {  
  private String department;  
  public Manager(String name, double salary, String dept)  
 {  
   super(name, salary);  
   department = dept;  
 }  
 public Manager(String n, String dept) {  
   super(name);  
   department = dept;  
 }  
 public Manager(String dept) {  
  // 这里就没有super()，编译器会自动地添加一个空参数的缺省super构造器，此时如果Employee类中没有空参数的缺省构造器，那就会导致一个编译错误  
   department = d;  
 }  
 }  


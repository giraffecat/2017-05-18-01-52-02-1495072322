public class Student
{
private String name;
private String gender;
private int age;
public Student()
{
}
public Student(String name, String gender, int age)
{
this.name = name;
this.gender = gender;
this.age = age;
}
public String introduce()
{
return "My name is " + name + ". I am a " + gender + ", and my age is " + age + ".";
}
public String write(String content)
{
System.out.println("这书写的内容：" + content);
return content;
}
public static void main(String []args)
{
Student s=new Student();
Student s1=new Student("xinxin","female",15);
s.introduce();
s1.introduce();
s.write("gone with the wind");
}
}

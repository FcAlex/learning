using System;
					
public class Program
{
	public static void Main()
	{
		var instance1 = Singleton.instance;
		var instance2 = Singleton.instance;
		
		Console.WriteLine(instance1 == instance2);
	}
}

public class Singleton {
	private static Singleton _instance = null;
	private Singleton() {}
	public static Singleton instance { get {
		if(Singleton._instance is null)
			Singleton._instance = new Singleton();

		return Singleton._instance;
	}}
}
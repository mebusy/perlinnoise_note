import java.util.Random;

public class Test {
    public static void main( String args[] ) {
        System.out.println( perlin.noise( 0.1,0.1, 0.1 ) );
        Random rnd = new Random();
        int seed = rnd.nextInt();
        System.out.println( perlin.noise( 0.1,0.1, 10*seed ) );
    }
}

import java.util.*;
import java.io.*;
class Main{
    static class FastReader
  {
    BufferedReader br;
    StringTokenizer st;
    public FastReader()
    {
      br = new BufferedReader(new InputStreamReader(System.in));
    }
    String next()
    {
      while (st == null || !st.hasMoreElements()){
        try { st = new StringTokenizer(br.readLine()); }
        catch (IOException e) { e.printStackTrace(); }
      }
      return st.nextToken();
    }
    int nextInt() { return Integer.parseInt(next()); }
    long nextLong() { return Long.parseLong(next()); }
    double nextDouble(){ return Double.parseDouble(next()); }
    String nextLine(){
      String str = "";
      try { str = br.readLine(); }
      catch (IOException e) { e.printStackTrace(); }
      return str;
    }
  }
  public static void rotateMatrix(int[][] matrix,int n){
      int top = 0;
      int bottom = n-1;
      int left = 0;
      int right = n-1;
      while(left<right && top<bottom){
          int prev = matrix[top+1][left];
          
          for(int i=left;i<=right; i++){
              int temp = matrix[top][i];
              matrix[top][i]=prev;
              prev = temp;
          }
          top++;
          for(int i=top;i<=bottom; i++){
              int temp = matrix[i][right];
              matrix[i][right]=prev;
              prev = temp;
          }
          right--;
          for(int i=right;i>=left; i--){
              int temp = matrix[bottom][i];
              matrix[bottom][i]=prev;
              prev = temp;
          }
          bottom--;
          for(int i=bottom;i>=top; i--){
              int temp = matrix[i][left];
              matrix[i][left]=prev;
              prev = temp;
          }
          left++;
      }
  }
  public static void main(String[] args){
      FastReader fr = new FastReader();
      int n = fr.nextInt();
      int[][] matrix = new int[n][n];
      for(int i=0; i<n; i++){
          for(int j=0; j<n; j++){
              matrix[i][j] = fr.nextInt();
          }
      }
      rotateMatrix(matrix,n);
      
      for(int i=0; i<n; i++){
          for(int j=0; j<n; j++){
              System.out.print(matrix[i][j]+" ");
          }
          System.out.println();
      }
      
  }

}
// Merge two Linked Lists


const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    let temp = head;
    
    while(l1!== null && l2!==null){
        
        if(l1.val<=l2.val){
            temp.next = l1;
            l1 = l1.next;
        }else{
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if(l1!==null){
        temp.next = l1;
    }
    
    if(l2!==null){
        temp.next = l2;
    }
    
    return head.next;
};

// Remove Duplicates

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
     let temp = head;
     
     while(temp.next!=null){
         if(temp.data==temp.next.data){
             let next = temp.next.next;
             temp.next = next;
         }else{
             temp = temp.next;
         }
     }
     return head;
};

// Rotate Linked List


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
  if(head == null || head.next ==null){
      return head;
  }
  
  let len = 1;
  let node = head;
  
  while(node.next!=null){
      len++;
      node = node.next;
  }
  
  k = k%len;
  
  if(k==0) return head;
  
  node.next = head;
  let curr = new LinkedListNode();
  curr = head;
  
  for(let i=len-k-1; i>0; i--)
  curr = curr.next;
  
  head = curr.next;
  curr.next = null;
  
  return head;
    
    
};

//Add two Linked Lists
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    
    let newNode = new ListNode();
    
    let head = newNode;
    let carry = 0;
    let sum = 0;
    while(l1!=null || l2!=null || sum){
      
        if(l1!=null){
            sum = sum + l1.val;
            l1=l1.next;
        }
        if(l2!=null){
            sum = sum + l2.val;
            l2=l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
        
    }
    return newNode.next;
    
};

//Just find minimum
function runProgram(input) {
    input = input.split("\n");
    let tc = Number(input[0]);

    let min = [];
    let stack = [];
    let ans = [];

    for (let i = 1; i <= tc; i++) {
        let temp = input[i].trim().split(" ");
        let n = min.length;

        if (temp[0] === "PUSH") {
            temp[1] = Number(temp[1]);

            stack.push(temp[1]);
            
            if (n == 0 || temp[1] < min[n - 1]) {
                min.push(temp[1]);
            } else {
                let element = min[n - 1];
                min.push(element);
            }
        } else if (temp[0] === "MIN") {
            if (n === 0){
               ans.push("EMPTY"); 
            }else{
               ans.push(min[n - 1]); 
            } 
        } else {
            if (n === 0){
               ans.push("EMPTY"); 
            }
            else {
                stack.pop();
                min.pop();
            }
        }
    }
    console.log(ans.join('\n'));
 }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }

//Signal's Capacity

function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let n = +input[line];
        line++;
        let arr = input[line].trim().split(' ').map(Number);
        line++;
        
        console.log(signalCap(arr,n));
    }
 }
 
 function signalCap(arr,n){
   let s1 = [];
   let s2 = [];
   let cap = " ";
   
   for(let i=0; i<arr.length; i++){
       let range =1;
       while(s1.length!=0){
           if(arr[i]>=s1[s1.length-1]){
               range = range + s2[s1.length-1];
               s1.pop();
               s2.pop();
           }else{
               break;
           }
       }
   s1.push(arr[i]);
   s2.push(range);
   cap = cap + range + " ";
   }
   return cap.trim();    
 }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

//Again a classical problem
function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let str = input[line].trim();
        line++;
        isBalancedParenthesis(str) ? console.log("balanced"):
            console.log("not balanced");
    }
 }
 
 function isBalancedParenthesis(str){
   let s = [];
   for(let i=0; i<str.length; i++){
       if(str[i]==='{' || str[i]==='('|| str[i]==='['){
           s.push(str[i]);
       }
           if(s.length==0){
               return false;
        }
       let par;
       
       switch(str[i]){
           case ')':{
               par = s.pop();
               if(par ==='{' || par==='[')
                   return false;
                   break;
           }
           
           case ']':{
               par = s.pop();
               if(par ==='(' || par==='{')
                   return false;
                   break;
           }
           
           case '}':{
               par = s.pop();
               if(par ==='(' || par==='[')
                   return false;
                   break;
           }
           
       }
   }
        return (s.length===0);
   }
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

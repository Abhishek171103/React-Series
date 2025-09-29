# This is my first react Project

<!-- 

What is React ===> Yeh ek JS library hai. Yeh ek spacially UI components par focus karta hai.
                    Iska main focus single page application ki taraf hota hai.

Why should we are use to react ??? ===> (1) yeh Component based architecture hota hai.
                                        (2) yeh moduler code likhta hai.
                                        (3) Reusable code
                                        (4) Virtual DOM
                                        (5) Easy to understand, Easy to debugging, clear code
                            Imp*        (6) Single page Application
                            Imp*        (7) Dynamic updatation ko support karta hai.
                            Imp*        (8) State management kar sakte hai
                            Imp*        (9) Props ke through data communicate kar sakte hai.
                            Imp*        (10) Hooks provide karta hai.

node_modules ===> Jo bhi hum npm install karenge, jis bhi package ko hum use kar rahe hai apne pure project
                    ke andar vo saare ki needed files is folder me aa jaayegi.

public ===> Jo bhi ese assest/static files hai jiski hume needed hai is project me vo saari files isme aane
            waali hai. Example => favicon.icon etc.

src folder ===> Main code/components is folder me aata hai.

            ===> (1) assets ==> Isme hum koi font rakh sakte hai, koi image ya extra css ki file rakhni ho,
                                vo bhi rakh sakte hai.
            
How to project create and run? ===> (1) npm create vite@latest
                                    (2) Project name
                                    (3) Select a framework => react
                                    (4) Select a variant => JavaScript
                                    (5) Done.
                                    (6) Now run :-  (1) change diractory
                                                    (2) npm install
                                                    (3) npm run dev


Components ===> Just assume that ki ye function hai. Yeh ek function ki tarah work karta hai.
                Hum function based or class based components bhi bna sakte hai. Lekin aaj ke time me 
                function based components hi jyada use karte hai.

.jsx ===> Isme Html code me javascript ko use karna hi main use hai.

props ===>  Jaise hum CSS me attribute ko use karte hai vese hi jsx me css ki jaise attribute ko use karna
            props kahlata hai. props ka data hamesha parent to child transfer hota hai.
            Eg :- <UserCard name="Abhishek Jain"></UserCard>
            Ek components se dusre components me data pass karna hi props kahlata hai.

Passing Props as Children and Function ===> Extra Props :- Isme hum children property ko use karna sikhte 
                                            hai or isme parent component se child component me pass karna sikha.

State Lifting ==> Let'us hmare pass ek parent component hai or hmare pass multiple child 
                    component hai (Example :- child A or child B) isme dono apni apni state
                    carry kar ke chal rahe hai. Ab multiple child component ye chahte hai ki ye sync ke chale (Note :- Esa kabhi nahi ho sakta kyuki indepedent 
                    state leke chal rahe hai.)
        Imp* ==>    Multiple child components ki responsibity parent component ko shift karna hi state 
                    lifting kahlata hai. Means parent component hi isko manage kare, create kare, change kare or iski saari functionality child components ko de de.

Conditional rendering ===>  (1) if-else
                            (2) ternory operator
                            (3) Logical operator
                            (4) Early return


Hooks ===> state management karna, navigation karna, state transation ko handle karna etc.
            React hame kuch features provide karta hai but vo feature use karne ke liye hooks ka use karte
            hai. Eg :- useState hook

            In other words :- A hooks in react are used to just hook on to the functionallity provided by 
            react.

        (1) useState hook ===>  Iske dwara state ko manage kiya jaata hai. Yeh hame 2 cheeze provide karta 
                                hai.
                                (1) state variable => Iske andar state store karega.
                                (2) state function => Iske through hum state ko change/update kar sakte hai

                    Eg :- const [state variable, state function] = useState(0);
                          const [count, setCount] = useState(0);

        (2) UseEffect hook ===> Type of hooks in react. Jo ki side effect generate karta hai.
                                The useEffect Hook allows you to perform side effects in our components.

                                Some examples of side effects are: fetching data, timers and 
                                                                    directly updating the DOM.

                    useEffect accepts two arguments. The second argument is optional.
                    useEffect(<function>, <dependency>)

                    Syntex :- useEffect(() => {
                                    first

                                return () => {
                                    second
                                }
                            }, [third])

                        (1) First -> side effect function/logic
                        (2) Second -> Clean up function. Some effects require cleanup to reduce memory
                                      leaks. Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be removed.
                        (3) Third -> comma separated dependent list

                Variation 1 => runs on every render
                    useEffect(() => {
                        alert("Run on each render.")
                    })

                Variation 2 => that runs on every first render
                    useEffect(() => {
                        alert("Run on every first render.")
                    }, [])

                Variation 3 => that runs on every time when count is updated.
                    useEffect(() => {
                        alert("Run on every time when count is updated.")
                    }, [count])

                Variation 4 => that runs on multiple dependencies.
                    useEffect(() => {
                        alert("Run on every time when count/total is updated.")
                    }, [count, total])

                Variation 5 => that runs on let's add a clean-up function
                    useEffect(() => {
                        alert("Count is updated.")
                    return () => {
                        alert("count is unmounted form UI.")
                        }
                    }, [count])

        (3) UseContext hook ===> Isse smjhne se pahle hame prop drilling smjhna pdega.

                    Prop Drilling (Definition) :- Prop drilling ka matlab hai ek parent component se data (state ya props) ko child components tak bhejna, aur fir un child se aur aage ke nested components tak pass karna.
                    Isme problem ye hoti hai ki beech ke components ko bhi woh props receive karne padte hain jinko actually us data ki zarurat hi nahi hoti, bas next component ko forward karna hota hai.

                    Example: A → B → C → D
                            (agar A ka data D me chahiye, to B aur C ke through props pass karna padega).

                    useContext (Explanation) :- React me useContext ek hook hai jo context ka use karke state/data ko directly access karne deta hai bina props drilling ke.
                    Matlab agar ek context create karke provider me data de diya ho, to koi bhi nested component useContext hook ka use karke us data ko directly access kar lega.

                    Steps to use useContext :- 
                    (1) Context Create karo
                            import { createContext } from "react";
                            const UserContext = createContext();

                    (2) Provider se wrap karo (state value provide karne ke liye)
                            import { useState } from "react";
                            function App() {
                                const [user, setUser] = useState("Abhishek");

                                return (
                                    <UserContext.Provider value={user}>
                                    <ComponentA />
                                    </UserContext.Provider>
                                );
                            }

                    (3) Child component me useContext ka use karke data lo
                            import { useContext } from "react";
                            function ComponentC() {
                                const user = useContext(UserContext);
                            return <h2>Hello {user}</h2>;
                            }


                Note :- (1) Nesting of context provider (Multiple Context) :- Jab hume alag-alag data ko 
                                                                            manage karna ho (jaise user info aur theme), to hum multiple context bana sakte hain.

                                Steps 1 :- Har data ke liye ek context banao. 
                                        const UserContext = createContext();
                                        const ThemeContext = createContext();
                                steps 2 :- App.jsx me dono context ko nest karke provider lagao.        
                                        <UserContext.Provider value={user}>
                                            <ThemeContext.Provider value={theme}>
                                                <ChildA />
                                            </ThemeContext.Provider>
                                        </UserContext.Provider>
                                Steps 3 :- Consume karte waqt useContext alag-alag use karo.
                                        const user = useContext(UserContext);
                                        const theme = useContext(ThemeContext);

                                        Important Points :- Provider nesting:
                                                        <UserContext.Provider value={user}>
                                                            <ThemeContext.Provider value={theme}>
                                                                <ChildA />
                                                            </ThemeContext.Provider>
                                                        </UserContext.Provider>
                                        
                        Note :- ✅ Is tarike se ek hi component multiple contexts ka data le sakta hai.
                                ❌ Lekin thoda zyada boilerplate code ho jata hai.

                        (2) Single Context with Multiple Values :- Agar tumhe multiple context banane ka 
                                                                jhanjhat nahi chahiye, to ek hi context banao aur usme object ke form me sab values bhej do.
                                
                                Steps 1 :- Ek context banao.
                                        const AppContext = createContext();
                                Steps 2 :- Provider me ek object ke form me values pass karo.
                                        <AppContext.Provider value={{ user, theme, setTheme }}>
                                            <ChildA />
                                        </AppContext.Provider>
                                Steps 3 :- Consume karte waqt destructure karo.
                                        const { user, theme, setTheme } = useContext(AppContext);

                        Note :- ✅ Is tarike se code simple ho jata hai, ek hi Provider hota hai.
                                ❌ Lekin agar project bahut bada ho jaye to ek hi context me sab kuch 
                                    daal dena messy ho sakta hai.


React Routing ===>  (1) What is Routing ===> React Router ek library hai jo React apps me routing (page
                                            switch karna) ke liye use hoti hai.

                    (2) Routing ka matlab ===> Routing ka matlab hai ek page se dusre page par jana bina 
                                            browser reload kare.

                    (3) Kyu use karte hain ===> Kyunki normal React app ek hi page hota hai (Single Page 
                                                Application – SPA).
                                                React Router se hum multiple pages ka feel de sakte hain.

                    (4) Kya-kya kaam karta hai ===> (i) Multiple pages banana SPA me.
                                                    (ii)URL ke parameters (jaise /user/101) handle karna.
                                                    (iii)Query string (jaise ?search=abc) handle karna.
                                                    (iv)Browser ka Back/Forward button chalana (History manage karna).
                                                    (v)Nested routes banana (page ke andar sub-pages).
                                                    (vi)Protected routes banana (jaise login ke bina kuch pages access na ho).
                    (5) Agar React Router na ho toh ===> Tumhari React app sirf ek hi page hogi, 
                                                        navigation ka option nahi milega.
                    
                    (6) Install React Router :- npm install react-router-dom

                    (7) Route Parameter / URL Parameter :- URL parameters ek tarah ke variables hote hain
                                                        jo URL me pass hote hain. Ye routes ko dynamic banate hain (URL ka kuch part badal sakta hai).
                                
                                Kaise access karte hain? => React Router ka useParams hook use karte hain.

                    Note => Link → Normal navigation ke liye. Active/inactive ka fark nahi pata sakta.
                            NavLink → Navigation + automatically active route ko highlight karta hai (class/style de sakte ho).

                    (8) UseNavigate ===> useNavigate() ek hook hai jo React Router deta hai.
                                        Isse ek navigate function milta hai jo tumhe programmatically (code ke through) kisi bhi page par le jaata hai.
                                        Exam :- const navigate = useNavigate();
                                                navigate("/about");

                            Note :- Agar hum window.location.href = "/about" use karte ho to pura page 
                                    reload hota hai, lekin useNavigate me reload nahi hota.

                    (9) Nested Routing ===> Nested routes matlab ek route ke andar aur routes.
                                            Example: Dashboard ke andar → Courses, Reports, MockTest alag-alag sub-pages.

                                            Iska use hum jab karte hai Jab ek page ke andar aur multiple sub-pages dikhane hote hain.
                                            Example: /dashboard/courses → Courses page dikhana.
                                                    /dashboard/reports → Reports page dikhana.
                                                    /dashboard/mock-test → MockTest page dikhana.

                                            Kaise likhte hain? => Parent route me children property use     
                                                                karte hain.

                                                        Example:
                                                        {
                                                            path: '/dashboard',
                                                            element: <Dashboard />,
                                                            children: [
                                                                { path: 'courses', element: <Courses /> },
                                                                { path: 'reports', element: <Reports /> }
                                                            ]
                                                        }
                                                        Yaha path relative hota hai → dashboard/courses ka matlab dashboard + courses.

                            Outlet (React Router) => <Outlet /> ek placeholder component hai.
                                                    Is jagah par children routes ka content render hota hai.

                                    Kyu use karte hain => Agar parent component (Dashboard) ke andar ek 
                                                        fixed UI hai (jaise NavBar, button, etc.) aur uske neeche child pages dikhane hain.
                                    Note :- Without <Outlet />, children routes dikh hi nahi paayenge.

                                    Example Flow :- Agar tum /dashboard/courses par jaate ho →
                                                        Pehle Dashboard component render hoga.
                                                        Fir <Outlet /> ki jagah <Courses /> render ho jayega.

                                                    Agar /dashboard/reports par jaate ho → Dashboard UI + <Reports /> show hoga.

React Hook form ===> 



Project One ===> What and why is react. Understood the react project how to create and how to run project.

Project Two ===> Components, JSX, Props

Project Three ===> Hooks intro, Counter App, useState hook

Project Four ===> Passing Props as Children and Function.
                  Extra Props :- Isme hum children property ko use karna sikhte hai or isme parent component se child component me pass karna sikha.

Project Five ===> State Lifting ==> Let'us hmare pass ek parent component hai or hmare pass multiple 
                                    child component hai (Example :- child A or child B) isme dono apni apni state carry kar ke chal rahe hai. Ab multiple child component ye chahte hai ki ye sync ke chale (Note :- Esa kabhi nahi ho sakta kyuki indepedent state leke chal rahe hai.)
                                    
                        Imp*        Multiple child components ki responsibity parent component ko shift
                                    karna hi state lifting kahlata hai. Means parent component hi isko manage kare, create kare, change kare or iski saari functionality child components ko de de.

Project Six ===> Conditional rendering
                (1) if-else
                (2) ternory operator
                (3) Logical operator
                (4) Early return

Project Seven and Eight ===> Event Handling, responding to event 

Project Nine and Ten ===> useEffect hook concept and Example

Project Eleven ===> useContext hook concept.

Project twelve ===> React Routing , useParam, useNavigate, Nested routing, outlet

Project Thirteen ===> React Hook Form

Project Fourteen ===> Redux Toolkit, useDispatch, 

Project Fifteen and Sixteen ===> useRef()

Project 17 ===> useMemo()

Project 18 ===> useCallback()



-->

# 📒 React Hook Form Notes

## (1) Installation
```bash
npm i react-hook-form
```

## (2) React Hook Form क्या है?

- React Hook Form एक **form management library** है React के लिए।  
- ये तुम्हें forms को आसानी से **बनाना, validate करना और handle करना** सिखाता है  
बिना ज्यादा boilerplate code लिखे।

## (3) क्यों इस्तेमाल करें?

- 🚀 **Lightweight & Fast** – बहुत छोटा size (kb में), performance friendly।  
- 🔄 **Less Re-render** – हर बार field change पर पूरा form re-render नहीं होता।  
- ✅ **Validation easy** – Built-in validation और external libraries (Yup, Zod) support करता है।  
- 🎯 **Simple API** – Hooks based API (`register`, `handleSubmit`, `errors`, `reset` etc.)।  

## 📌 Important Functions in React Hook Form (RHF)

| Function        | Description                                                                 | Example                                                   |
|-----------------|-----------------------------------------------------------------------------|-----------------------------------------------------------|
| `useForm()`     | Main hook जिससे form की state और utilities मिलती हैं                          | `const { register, handleSubmit } = useForm();`           |
| `register()`    | Input field को RHF से connect करता है और validation rules define करता है      | `<input {...register("username", { required: true })} />` |
| `handleSubmit()`| Validation check करने के बाद submit function call करता है                     | `<form onSubmit={handleSubmit(onSubmit)}>`                |
| `formState`     | Form की current state रखता है जैसे `errors`, `isSubmitting`, `isValid` आदि    | `formState.errors.username`                               |
| `watch()`       | किसी field की value real-time observe करने के लिए                             | `const email = watch("email");`                           |
| `reset()`       | Form को reset करने या default values set करने के लिए                          | `reset({ username: "Abhishek" });`                         |
| `setValue()`    | किसी field की value programmatically set करने के लिए                         | `setValue("username", "Abhishek");`                        |
| `getValues()`   | Form की current values access करने के लिए                                    | `const data = getValues();`                                |
| `trigger()`     | Specific field या पूरे form का validation manually trigger करने के लिए          | `trigger("email");`                                        |
| `unregister()`  | किसी field को form state से remove करने के लिए                                 | `unregister("username");`                                 |

---

### 1. `useForm()`
- यह main hook है जिससे form manage होता है।  
- इससे कई utilities मिलती हैं जैसे:  
  - `register`  
  - `handleSubmit`  
  - `watch`  
  - `reset`  
  - `setValue`  
  - `getValues`  
  - `formState` (जिसमें `errors`, `isSubmitting`, `isValid` आदि आते हैं)  

---


### 2. `register()`
- किसी भी input field को React Hook Form से connect करता है।  
- Example:  
```jsx
<input {...register("username", { required: "Username is required" })} />
```

### 3. `handleSubmit()`
- Form submit होने पर validation check करता है और फिर submit function call करता है।
- Example:
```jsx
<form onSubmit={handleSubmit(onSubmit)}></form>
```

### 4. `formState`
- इसमें form की current state रहती है।
- Common properties:
    - errors → Validation errors
    - isSubmitting → जब async submit हो रहा हो
    - isDirty → अगर form में कोई बदलाव हुआ हो
    - isValid → अगर सारे validations pass हो गए हों

### 5. `watch()`
- किसी field की value को real-time observe करने के लिए।
- Example:
```jsx
const password = watch("password");
```

### 6. `reset()`
- पूरे form को या specific fields को reset करने के लिए।
- Example:
```jsx
reset(); // पूरा form reset
reset({ username: "Abhishek" }); // specific value set करके reset
```

### 7. `setValue()`
- किसी field की value programmatically set करने के लिए।
- Example:
```jsx
setValue("username", "Abhishek");
```

### 8. `getValues()`
- Form की current values access करने के लिए।
- Example:
```jsx
const allValues = getValues();
```

### 9. `trigger()`
- किसी field या पूरे form का validation manually trigger करने के लिए।
- Example:
```jsx
trigger("email"); // सिर्फ email field का validation
```

### 10. `unregister()`
- किसी field को form state से remove करने के लिए।
- Example:
```jsx
unregister("username");
```

---

## 📌 Validation Rules in React Hook Form

| Rule             | Description                                                                 | Example                                                           |
|------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------|
| `required`       | Field को अनिवार्य बनाता है।                                                     | `register("username", { required: true })`                        |
| `minLength`      | Input की minimum length सेट करता है।                                          | `register("password", { minLength: 6 })`                          |
| `maxLength`      | Input की maximum length सेट करता है।                                          | `register("bio", { maxLength: 100 })`                             |
| `min`            | Numeric field की minimum value सेट करता है।                                   | `register("age", { min: 18 })`                                    |
| `max`            | Numeric field की maximum value सेट करता है।                                   | `register("age", { max: 60 })`                                    |
| `pattern`        | Regex pattern के against input validate करता है।                              | `register("email", { pattern: /^[^@ ]+@[^@ ]+\.[^@ ]+$/ })`       |
| `validate`       | Custom validation function define करने के लिए।                                | `register("username", { validate: value => value !== "admin" })`  |
| `valueAsNumber`  | Input value को number में convert करता है।                                     | `register("price", { valueAsNumber: true })`                      |
| `valueAsDate`    | Input value को date object में convert करता है।                                | `register("dob", { valueAsDate: true })`                           |
| `setValueAs`     | Value को custom transformation (जैसे trim, parse) से set करने के लिए।           | `register("username", { setValueAs: v => v.trim() })`             |

---

### Example Code Snippet

```Example
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    trigger,
    unregister,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 sec delay
    console.log("Form Submitted:", data);
  };

  // Real-time watch example
  const password = watch("password");

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Username */}
        <label>Username</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 4, message: "Min 4 characters" },
            maxLength: { value: 20, message: "Max 20 characters" },
            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" },
            setValueAs: v => v.trim(),
            validate: value => value !== "admin" || "Username 'admin' not allowed"
          })}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Min 8 characters" },
            pattern: { value: /(?=.*[0-9])(?=.*[A-Z])/, message: "Must contain 1 number & 1 uppercase" }
          })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <p>Typed Password: {password}</p>

        {/* Age */}
        <label>Age</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Min age 18" },
            max: { value: 60, message: "Max age 60" },
            valueAsNumber: true
          })}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}

        {/* Date of Birth */}
        <label>Date of Birth</label>
        <input
          type="date"
          {...register("dob", {
            required: "DOB is required",
            valueAsDate: true
          })}
        />
        {errors.dob && <p style={{ color: "red" }}>{errors.dob.message}</p>}

        {/* Submit */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      <br />

      {/* Extra buttons for demonstration */}
      <button onClick={() => reset()}>Reset Form</button>
      <button onClick={() => setValue("username", "Abhishek")}>Set Username</button>
      <button onClick={() => console.log(getValues())}>Get Values</button>
      <button onClick={() => trigger("username")}>Trigger Username Validation</button>
      <button onClick={() => unregister("age")}>Unregister Age</button>
    </div>
  );
}

export default App;
```

---

# 📒 Redux Toolkit Notes

# Redux Toolkit (RTK) Notes

Redux Toolkit (RTK) React ke liye Redux ka **official aur easiest way** hai. Ye traditional Redux se simple aur fast hai, aur boilerplate code kam karta hai.

---

## 1. RTK kya hai?

- RTK = Redux Toolkit
- Redux ka modern, recommended version
- State management ko easy banata hai
- Boilerplate kam karta hai aur code clean rakhta hai

---

## 2. RTK kyu use kare?

- Traditional Redux verbose hota hai (bohot saari files aur code)
- RTK se:
  - Store easily create hota hai (`configureStore`)
  - Reducers aur actions ek saath define hote hain (`createSlice`)
  - Immutable updates automatically handle hote hain (Immer ka use)
  - Async actions easy handle hote hain (`createAsyncThunk`)

---

## 3. Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

### Prop Drilling Problem
- React me agar ek parent component ka data deep nested child tak bhejna ho, to hume props pass karne padte hain har level pe.

- Example:
-  App
    └─ Parent
          └─ Child
               └─ GrandChild

- Note => Agar GrandChild ko App ka data chahiye, to Parent aur Child se props pass karne padte hain. Ye messy aur headache ban jata hai.

### Redux Toolkit ka solution
- Redux Toolkit me ek central store hota hai jaha saari app ki state rakhi jati hai.
- Jo bhi component ko data chahiye, wo directly store se le sakta hai, props pass karne ki zarurat nahi.

---

# Redux Toolkit Flow (Tree View)

App  
└── UI (Button Click)  
    └── Dispatch Action  
        └── Store  
            └── Reducer  
                └── State Update (in Store)  
                    └── UI Re-render (New Data Show)

---

# Example with Counter App

App  
└── Button "+" Click  
    └── dispatch(increment())  
        └── Store  
            └── counterReducer  
                └── state.value = state.value + 1  
                    └── UI shows updated count

---

### RTK me kaise kaam karta hai

### (1) - Slice banate hain (state + actions ek jagah)

```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### (2) Store create karte hain

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

### (3) App me Provider se store provide karte hain

```js
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

<Provider store={store}>
  <App />
</Provider>
```

### (4) Components me state use karte hain

```js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

### Result :- 
- ✅ Ab kisi component ko parent se props pass karne ki zarurat nahi.
- ✅ Ye hi hai RTK ka main benefit: centralized store se data easily share kar sakte ho.

---

# 1 Redux Toolkit Terms (Simple Language)

## 1.1. Action
- Action ek **event ya object** hota hai.  
- Ye **batata hai ki kya karna hai** (event) aur kabhi kabhi extra information bhi carry karta hai (payload/data).  
- Example:  
```js
{ type: 'increment' }
{ type: 'incrementByAmount', payload: 5 }
```

## 1.2. Store
- Store central jagah hai jaha app ki saari state rakhi jati hai.
- Ye contain karta hai:
    - State: Data jo aap manage karna chahte ho
    - Reducers: Functions jo state ko update karte hain

## 1.3. Reducer
- Reducer ek function hai jo batata hai ki state ko kaise update karna hai.
- Ye pure function hota hai: same input => same output.
- Example:
```js
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});
```

## 1.4. Slice
- Slice ek feature module hai jo state aur reducers ek saath rakhta hai.
- Isme hota hai:
    - initialState → starting state
    - reducers → logic for updating state
- Example:
```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  }
});
```

## 1.5. State
- State data ka snapshot hota hai jo app me current hai.
- Ye wo data hai jo UI me show hota hai aur manipulate kiya ja sakta hai.
- Example:
```js
const initialState = { value: 0 };
```

# 2. Setting up Store
- Store create karte hain aur reducers combine karte hain:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";       // import counter reducer here

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
}); 
export default store;
```

# 3. Connect Store to React App
- App ko <Provider> ke andar wrap karo aur store pass karo:
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Redux/Store.js'          // import store from Store.js
import { Provider } from 'react-redux'            // to connect react with redux

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>                  {/* wrap App with Provider and pass store as a prop */} 
    <App />
  </Provider>
  </StrictMode>,
)
```

# 4. Access State & Dispatch Actions

## 4.1 Read State (useSelector)
```js
import { useSelector } from 'react-redux';

function CounterDisplay() {
  const count = useSelector(state => state.counter.value);
  return <p>Count: {count}</p>;
}
```

## 4.2 Update State (useDispatch)
```js
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

# 5. Async Actions (createAsyncThunk)
- API calls aur async tasks ke liye use hota hai:

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const res = await fetch('https://api.example.com/data');
    return res.json();
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state) => { state.status = 'failed'; });
  }
});

export default dataSlice.reducer;
```

# 6. RTK vs Prop Drilling
- Prop Drilling me data parent se child tak multiple levels pass karna padta hai → headache!
- RTK me central store hota hai → koi bhi component directly state access ya update kar sakta hai.
- Example:
```js
const count = useSelector(state => state.counter.value); // no props needed
dispatch(increment()); // no props needed
```

# 7. Tips / Best Practices
- Slice ko small aur focused rakho
- Reducer ko default export, actions ko named export rakho
- App ko Provider ke andar wrap karna mat bhoolna
- Async logic ke liye createAsyncThunk use karo
- Multiple slices ho to configureStore me combine karo

---

# React useRef Hook – Notes (Tree Structure)

- **useRef Hook**
  - **Introduction**
    - `useRef` values ko **render ke beech persist** karne ke liye use hota hai.
    - Value update hone par **component re-render nahi hota**.
    - Mostly use hota hai:
      - DOM element access karne ke liye
      - Mutable value store karne ke liye
      - Previous state tracking ke liye

  - **Returns One Item**
    - `useRef()` **ek object return karta hai**.
    - Object ke andar `.current` property hoti hai.
    - Initialization example:
      ```js
      const count = useRef(0); // internally { current: 0 }
      console.log(count.current); // 0
      ```

  - **Does Not Cause Re-renders**
    - `useState` update se **re-render hota hai** → infinite loop ka risk.
    - `useRef` update se **re-render nahi hota**.
    - Example:
      ```jsx
      const renderCount = useRef(0);
      useEffect(() => {
        renderCount.current += 1;
      });
      ```

  - **Tracking State Changes**
    - `useRef` ka use **previous state store** karne ke liye hota hai.
    - Example:
      ```jsx
      const prevCount = useRef();
      useEffect(() => {
        prevCount.current = count;
      }, [count]);
      ```

  - **Accessing DOM Elements**
    - **Steps**
      1. Create ref: `const inputElement = useRef();`
      2. Attach to JSX element: `<input ref={inputElement} />`
      3. Access DOM element: `inputElement.current`
    - Example:
      ```jsx
      function App() {
        const inputElement = useRef();
        const focusInput = () => inputElement.current.focus();

        return (
          <div>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
          </div>
        );
      }
      ```

  - **Key Points**
    - `useRef()` → returns `{ current: initialValue }`
    - `.current` se value access/update hoti hai
    - Update hone par **component re-render nahi hota**
    - Useful for:
      - DOM manipulation
      - Previous state tracking
      - Render counting

---

# React useMemo Hook

- **useMemo** Hook ek **memoized value** return karta hai.
- **Memoization** ka matlab hai ek value ko **cache karna**, taki baar-baar calculate na karna pade.
- useMemo tabhi run hota hai jab uski **dependency change** ho.
- Isse **performance improve** hoti hai.

---

# Memoization

- **Kya hai:**  
  Ek technique jisme hum function ka result **yaad (store) rakhte** hain, taki agar same input dobara aaye to **dobara calculate na kare**, cached value return kare.

- **Kyu use karte hain:**  
  - Heavy calculation ko baar-baar run hone se bachane ke liye  
  - Performance improve karne ke liye  
  - Recursion ya expensive functions me useful  

- **Example bina memoization ke:**
```javascript
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(10));
```

- Note :- Problem: Same value ko baar-baar calculate karta hai → slow

### React me (useMemo)
- Principle same hai
- Expensive function ko wrap kar dete hain, sirf tab run hota hai jab dependencies change ho
```js
const doubled = useMemo(() => expensiveTask(input), [input]);
```

---

Memoization
├─ Kya hai
│   └─ Function ka result yaad rakhna, repeat calculation avoid karna
├─ Kyu use karte hain
│   ├─ Heavy calculation avoid karna
│   ├─ Performance improve karna
│   └─ Recursion/expensive functions me helpful
├─ Example bina memoization ke
│   └─ Fibonacci function baar-baar calculate karta hai
├─ Example with memoization
│   ├─ Cache object me result store karna
│   ├─ Agar input repeat hua → cached value return
│   └─ Expensive calculation sirf once run
└─ React useMemo
    ├─ Expensive function ko wrap karte hain
    ├─ Only run when dependencies change
    └─ Returns cached/memoized value

---

# useMemo vs useCallback

- **useMemo** returns a **memoized value**.  
- **useCallback** returns a **memoized function**.

## Without useMemo
- useMemo ka use un functions ke liye hota hai jo **expensive** ya **resource intensive** hain, taki wo **baar-baar run na ho**.

---

# Use useMemo

- Agar koi function **performance heavy** hai, to usko baar-baar run hone se bachane ke liye **useMemo** ka use kar sakte hain.  
- Isse function **sirf tabhi run hota hai jab zarurat ho**.  
- Hum expensive function ko **useMemo se wrap** kar sakte hain.  
- useMemo **doosra parameter** accept karta hai: **dependency array**.  
  - Function tabhi run hota hai jab uski dependencies change ho.

### Example
```js
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function expensiveTask(num) {
    console.log('Expensive task running...')
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2
  }

  let doubledCount = useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
        <p>Count: {count}</p>
        <input type="number"
              value={input}
              placeholder='Enter a number'
              onChange={(e) => setInput(Number(e.target.value))}
        />
        <br />
        <br />
        <button>
          DoubleCount: {doubledCount}
        </button>
      </div>
    </>
  )
}

export default App
```

---
## Quick tree view (useMemo)

useMemo Hook
├─ Returns memoized value
├─ Memoization = caching value
├─ Runs only on dependency change
├─ Improves performance
├─ Syntax: useMemo(() => func, [dependencies])
├─ vs useCallback
│   ├─ useMemo -> value
│   └─ useCallback -> function
├─ Example
│   ├─ State: count, input
│   ├─ Expensive function: expensiveTask
│   ├─ Memoized value: doubledCount
│   └─ Display in component
└─ Key Points
    ├─ Avoids unnecessary calculations
    ├─ Dependency array is important
    └─ Does not prevent re-render

---

# React useCallback Hook

- **Kya hai:**  
  useCallback ek **callback function ko memoize** karne ke liye use hota hai.  
  Matlab function ko yaad rakhna (cache karna), taki baar-baar dobara create na ho.  

- **Kaise kaam karta hai:**  
  - Function tabhi dobara create hota hai jab **dependencies change** hoti hain.  
  - Har render me function ko unnecessarily dobara banne se bachata hai.  
  - Performance improve hoti hai, specially jab function ko **props ke through child component** me bhejna ho.  

- **Syntax:**
```javascript
  const memoizedCallback = useCallback(callback, dependencies)
```

```js
useCallback Parameters
├─ callback
│   └─ Function jo memoize karna hai
│      └─ React usko yaad rakhta hai, har render pe dobara nahi banata
└─ dependencies
    ├─ Array of values
    ├─ Callback sirf tab change hoga jab dependency change ho
    └─ Agar dependency same hai → same function reuse hoga
```

---

# React.memo (Normal Language me)

## Kya hai:
- React.memo ek **Higher Order Component (HOC)** hai.  
- Ye ek component ko **memoize** karta hai → Matlab React component ko **yaad rakhta hai**.  

## Kaam kya karta hai:
- Jab parent component re-render hota hai to normally child component bhi re-render ho jata hai.  
- React.memo check karta hai ki **props change huye hain ya nahi**.  
  - Agar props **same hain** → child dobara render **nahi hoga**.  
  - Agar props **change huye hain** → child **re-render hoga**.  

## Use-case:
- Jab aapke paas **pure functional components** hote hain jo same props pe same output dete hain.  
- Ye unnecessary **re-renders avoid** karke performance improve karta hai.  

### Example
```js
import React from 'react';

const ChildComponent = React.memo((props) => {
  console.log("Child Component Rendered");

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonText}
      </button>
    </div>
  );
});

export default ChildComponent;
```

# Explanation (React.memo)

- Yaha `ChildComponent` ko **React.memo** se wrap kiya gaya hai.  
- Matlab agar **parent component re-render** hota hai but `handleClick` aur `buttonText` props **same hain** →  
  - Console me `"Child Component Rendered"` dobara **nahi dikhega**.  
  - Component ka render **skip ho jayega**.  

---

## React.memo
├─ Kya hai
│   └─ Higher Order Component jo component ko memoize karta hai
├─ Kaise kaam karta hai
│   ├─ Parent render hote hi child normally render hota hai
│   ├─ React.memo check karta hai props change huye ya nahi
│   ├─ Props same → render skip
│   └─ Props different → render hoga
├─ Use-case
│   └─ Functional components with same output for same props
└─ Example
    ├─ ChildComponent wrap with React.memo
    ├─ handleClick & buttonText props pass
    └─ Agar props same rahe → child re-render nahi karega

---

# React.memo with Function Props

## 🔎 Problem
- React.memo sirf **shallow comparison** karta hai.
- Agar props me **function** aata hai:
  - Har render pe function ki **nayi copy** banti hai.
  - React.memo ko lagta hai props badal gaye → Child re-render ho jata hai.
- Result → **Unnecessary renders**.

---

## ✅ Solution → useCallback + React.memo
- `useCallback` function ko **memoize** karta hai.
- Jab tak dependencies same hain, function ki **same copy** use hoti hai.
- React.memo ke sath milkar unnecessary renders avoid karta hai.

---

## 🌳 Tree Structure

React.memo with Function Props
├─ Problem
│   ├─ Props shallow compare hote hain
│   ├─ Function ek reference type hai
│   ├─ Har render pe function ki nayi copy banti hai
│   └─ Child re-render hota hai even if logic same hai
├─ Solution
│   ├─ Function ko useCallback se wrap karo
│   ├─ Dependencies define karo
│   └─ Jab tak dependencies same hain, function ki copy same rahegi
└─ Example
    ├─ Without useCallback → Child hamesha re-render
    └─ With useCallback → Child unnecessary re-render se bachega

---

## 📝 Example Code

```jsx
// Parent Component
import React, { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  // ✅ Memoized function
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Parent Count: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;

// Child Component
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered!");
  return <button onClick={onClick}>Child Button</button>;
});

export default Child;
```

---


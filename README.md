# Lecture 3

## Tips for Angular Component Generation  

To generate a new Angular Directive, use the following command:  

```bash
ng g c "Component_Name"
```


## Pipes
Something you apply on value to change it's format:

1. **Built-in Pipes**
    - **DatePipe**
    - **UpperCasePipe**
    - **LowerCasePipe**
    - **CurrencyPipe** 
    - **DecimalPipe** 
    - **PercentPipe** 

2. **Custom Pipes**


## Component Lifecycle
Component have 4 different phases.

1. **Creation**
    - **Constructor**

2. **Change Detection**
    - **ngOnInit** => Run once after the component initialized
    - **ngOnChanges** => Run every time the component's input change
    - **ngAfterViewInit** => Run once after the component's view initialized
    - **ngAfterContentInit** => Run once after the component's content initialized

3. **Destruction**
    - **ngOnDestroy**


## Component Interaction
We have two types of interaction 

1. **Related**
    - **Parent to Child (Vice Versa)**
      - **Decorator Functions**

2. **Unrelated**
    - **Siblings**
      - **Service**

## Events in JS
Have two things to implement it:  

1. **Publisher**
    - **Define Event**
    - **Fire Event**

2. **Subscriber**
    - **Listen**

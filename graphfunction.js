/**
 * Tutorial on making graphs with plotly.js
 **/

/**
 * This function calculates the income tax owed on an income.
 * Parameters: , income (per year), brackets, tax percentage, product (brackets * tax percentage) additional tax and 
 sum 
 ( product + additional tax) .
 * Returns: the income tax to be payed
 */
function incomeTax(){
    
    
    
    
    
    
    
}

function buttonpress() {
    
}

/**
 * This function draws a graph
 */
function drawGraph() {

    // declare all variables (variables inside a function are created when the function is called)
    var income, difference, product, sum ;
    income = document.getElementById("incomeField");
   
    
    //generate the values
    for (var i = 0; i < 26; i++) {
        time[i] = i;
        interest[i] = simpleInterest(100,0.05, i);  
    }
    
    

    /* Trace is an object that stores the x and y values. The x, y and type variables are required mandatory. */
    trace = {
        x:time, // x values
        y:interest, // y values
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];

    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "A simple graph in Plotly",
        yaxis: {
            title: "y-axis", // give the axis a label
            zerolinewidth: 1.5 // makes the zero line thicker
        },
        xaxis: {
            title: "x-axis",
            zerolinewidth: 1.5,
           // range: [0, 5] // sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();

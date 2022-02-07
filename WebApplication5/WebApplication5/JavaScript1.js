<script runat="server">
    
    void Page_Load(Object sender, EventArgs e)
{
        button.Click += new EventHandler(this.submit);
}

void submit(Object sender, EventArgs e)
{
     Button clickedButton = (Button)sender;
     clickedButton.Text = "...button clicked...";
     clickedButton.Enabled = false;
     GreetingLabel.Visible = true;
}

</script>
const regexp = /(?:!codstats|!wzstats)/i;

const handler = async (ctx) => {

  const codStatsRequest = ctx.message.text;

  function codStatsCatchAll() {
    let test = codStatsRequest.match(regexp);

    let reply = 'Very usa <b>!codstats</b> <pre>!codstats piattaforma nickname</pre>\n\nMuch piattaforme supportate: <pre>battle | psn | xbl</pre>';
    let errorMessage = 'Much error';

    return (test ? 
      ctx.replyWithHTML(reply)
      : 
      ctx.replyWithHTML(errorMessage)
    );
  }
  
  codStatsCatchAll();
  
};

module.exports = {
  regexp,
  fn: handler
};
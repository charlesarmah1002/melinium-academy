const form = document.getElementById('feedback-form')
const submitBtn = form.querySelector('button')

submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const feedback = document.getElementById('feedback').value


    const formData = {
        name: name,
        email: email,
        feedback: feedback
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kharlregardlessarmah@gmail.com",
        Password: "B5DF47DF6AA28F06A598B5C72A19A511CE2D",
        To: 'charlesarmah.dev@gmail.com',
        From: "charlesarmah.dev@gmail.com",
        Subject: "Feedback",
        Body: `
        <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <style type="text/css">
        body,
        html {
            margin: 0px;
            padding: 0px;
            -webkit-font-smoothing: antialiased;
            text-size-adjust: none;
            width: 100% !important;
        }

        table td,
        table {}

        #outlook a {
            padding: 0px;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        @media only screen and (max-width: 480px) {
            table tr td table.edsocialfollowcontainer {
                width: auto !important;
            }

            table,
            table tr td,
            table td {
                width: 100% !important;
            }

            img {
                width: inherit;
            }

            .layer_2 {
                max-width: 100% !important;
            }

            .edsocialfollowcontainer table {
                max-width: 25% !important;
            }

            .edsocialfollowcontainer table td {
                padding: 10px !important;
            }

            .edsocialfollowcontainer table {
                max-width: 25% !important;
            }

            .edsocialfollowcontainer table td {
                padding: 10px !important;
            }
        }
    </style>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext"
        data-name="open_sans" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
</head>

<body style="padding:0; margin: 0;background: #f5f6f8" data-new-gr-c-s-loaded="14.1121.0" data-gr-ext-installed=""
    data-new-gr-c-s-check-loaded="14.1121.0">
    <table style="height: 100%; width: 100%; background-color: #f5f6f8;" align="center">
        <tbody>
            <tr>
                <td valign="top" id="dbody" data-version="2.31"
                    style="width: 100%; height: 100%; padding-top: 50px; padding-bottom: 50px; background-color: #f5f6f8;">
                    <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:640px" width="640" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                    <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0"
                        style="max-width: 640px; box-sizing: border-box; width: 100%; margin: 0px auto;">
                        <tbody>
                            <tr>
                                <td class="drow" valign="top" align="center"
                                    style="background-color: #f5f6f8; box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                                    <div class="layer_2"
                                        style="max-width: 640px; display: inline-block; vertical-align: top; width: 100%;">
                                        <table border="0" cellspacing="0" class="edcontent"
                                            style="border-collapse: collapse;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" class="edtext"
                                                        style="padding: 12px; text-align: left; color: #5f5f5f; font-size: 15px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                                        <p class="text-center"
                                                            style="text-align: center; margin: 0px; padding: 0px;"><span
                                                                style="font-size: 10px;">This text will show up next to
                                                                the subject line in some email clients.</span></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td class="drow" valign="top" align="center"
                                    style="background-color: #f9fafb; box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                                    <div class="layer_2"
                                        style="max-width: 640px; display: inline-block; vertical-align: top; width: 100%;">
                                        <table border="0" cellspacing="0" class="edcontent"
                                            style="border-collapse: collapse;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" class="edtext"
                                                        style="padding: 32px; text-align: left; color: #5f5f5f; font-size: 15px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                                        <p class="style1 text-center"
                                                            style="line-height: 1.75em; text-align: center; margin: 0px; padding: 0px; color: #000000; font-size: 32px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                                            New Feedback<br></p>
                                                        <p class="text-center"
                                                            style="line-height: 1.75em; text-align: center; margin: 0px; padding: 0px;">
                                                            <br></p>
                                                        <p style="margin: 0px; padding: 0px;">Hi [Mr Melinium],</p>
                                                        <p style="margin: 0px; padding: 0px;"><br></p>
                                                        <p style="margin: 0px; padding: 0px;">${formData.feedback}</p>
                                                        <p style="margin: 0px; padding: 0px;"><br></p>
                                                        <p style="margin: 0px; padding: 0px;">Yours faithfully,</p>
                                                        <p style="margin: 0px; padding: 0px;">${formData.name}</p>
                                                        <p style="margin: 0px; padding: 0px;"> ${formData.email} </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td class="drow" valign="top" align="center"
                                    style="background-color: #f5f6f8; box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                                    <div class="layer_2"
                                        style="max-width: 640px; display: inline-block; vertical-align: top; width: 100%;">
                                        <table border="0" cellspacing="0" class="edcontent"
                                            style="border-collapse: collapse;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" class="edtext"
                                                        style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 15px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                                        <p class="text-center"
                                                            style="line-height: 1.75em; text-align: center; margin: 0px; padding: 0px;">
                                                            <span style="font-size: 11px;">If you no longer wish to
                                                                receive mail from us, you can <a href="{unsubscribe}"
                                                                    style="background-color: initial; color: #5457ff; text-decoration: none;">unsubscribe</a></span><br><span
                                                                style="font-size: 11px;">{accountaddress}</span></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td class="drow" valign="top" align="center"
                                    style="background-color: #f5f6f8; box-sizing: border-box; font-size: 0px; text-align: center;">
                                    <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                                    <div class="layer_2"
                                        style="max-width: 640px; display: inline-block; vertical-align: top; width: 100%;">
                                        <table border="0" cellspacing="0" class="edcontent"
                                            style="border-collapse: collapse;width:100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" class="edtext"
                                                        style="padding: 12px; text-align: left; color: #5f5f5f; font-size: 15px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                                                        <p class="text-center"
                                                            style="font-size: 9px; text-align: center; margin: 0px; padding: 0px;">
                                                            <span style="font-size: 10px;">Unable to view? Read it
                                                            </span><a href="{view}"
                                                                style="color: #5457ff; text-decoration: none;"><span
                                                                    style="font-size: 10px;">Online</span></a></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
        `
    }).then(
        message => alert(message),
        window.alert('this thing worked')
    );
})
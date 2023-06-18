<script>
  let lang = 'en';
  const locale = {}
  locale['en'] = {
      "telephone": "Telephone",
      "bankaccount": "IBAN / Bank nr.",
      "tax": "Chamber of Commerce nr. "
  }
  locale['nl'] = {
    "telephone": "Telefoon",
      "bankaccount": "IBAN Rekening",
      "tax": "KVK Nummer"
  }
</script>

<nav class="landscape:md:flex justify-center mx-auto text-sm">
  <div class="flex flex-col text-center p-4">
    <div>
      <p class="font-bold">{ locale[lang].telephone } (HOLLAND)
      </p>
      <p class="title text-md">+31(0)6 285 86 335
      </p>
    </div>
  </div>
  <div class="flex flex-col text-center p-4">
    <div>
      <p class="font-bold">{ locale[lang].telephone } (AFRICA)
      </p>
      <p class="title text-md ">+234 91 692 03 399
      </p>
    </div>
  </div>
  <div class="flex flex-col text-center p-4">
    <div>
      <p class="font-bold">{ locale[lang].bankaccount }
      </p>
      <p class="title text-md ">NL92INGB0006639081
      </p>
    </div>
  </div>
  <div class="flex flex-col text-center p-4">
    <div>
      <p class="font-bold">{ locale[lang].tax }
      </p>
      <p class="title text-md ">55762441
      </p>
    </div>
  </div>
</nav>

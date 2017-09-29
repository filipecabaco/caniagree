defmodule Caniagree.Parser do

  @filters ["p", "a", "br", "b", "i"]
  @api_key Application.get_env(:caniagree, :api_key)
  @default_url "https://mercury.postlight.com/parser?url=https://www.facebook.com/legal/terms"

  def parse, do: parse(@default_url)

  def parse(url) do
    headers = [
      {"x-api-key", @api_key}
    ]
    {:ok, resp} = HTTPoison.get(url, headers)
    body = resp.body
    html = body |> Poison.decode! |> Map.get("content")
    text = html |> Floki.text |> String.split("\n")
  end
end

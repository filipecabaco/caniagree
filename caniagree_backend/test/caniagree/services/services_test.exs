defmodule Caniagree.ServicesTest do
  use Caniagree.DataCase

  alias Caniagree.Services

  describe "paragraphs" do
    alias Caniagree.Services.Paragraph

    @valid_attrs %{body: "some body", down_vote: 42, up_vote: 42}
    @update_attrs %{body: "some updated body", down_vote: 43, up_vote: 43}
    @invalid_attrs %{body: nil, down_vote: nil, up_vote: nil}

    def paragraph_fixture(attrs \\ %{}) do
      {:ok, paragraph} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Services.create_paragraph()

      paragraph
    end

    test "list_paragraphs/0 returns all paragraphs" do
      paragraph = paragraph_fixture()
      assert Services.list_paragraphs() == [paragraph]
    end

    test "get_paragraph!/1 returns the paragraph with given id" do
      paragraph = paragraph_fixture()
      assert Services.get_paragraph!(paragraph.id) == paragraph
    end

    test "create_paragraph/1 with valid data creates a paragraph" do
      assert {:ok, %Paragraph{} = paragraph} = Services.create_paragraph(@valid_attrs)
      assert paragraph.body == "some body"
      assert paragraph.down_vote == 42
      assert paragraph.up_vote == 42
    end

    test "create_paragraph/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Services.create_paragraph(@invalid_attrs)
    end

    test "update_paragraph/2 with valid data updates the paragraph" do
      paragraph = paragraph_fixture()
      assert {:ok, paragraph} = Services.update_paragraph(paragraph, @update_attrs)
      assert %Paragraph{} = paragraph
      assert paragraph.body == "some updated body"
      assert paragraph.down_vote == 43
      assert paragraph.up_vote == 43
    end

    test "update_paragraph/2 with invalid data returns error changeset" do
      paragraph = paragraph_fixture()
      assert {:error, %Ecto.Changeset{}} = Services.update_paragraph(paragraph, @invalid_attrs)
      assert paragraph == Services.get_paragraph!(paragraph.id)
    end

    test "delete_paragraph/1 deletes the paragraph" do
      paragraph = paragraph_fixture()
      assert {:ok, %Paragraph{}} = Services.delete_paragraph(paragraph)
      assert_raise Ecto.NoResultsError, fn -> Services.get_paragraph!(paragraph.id) end
    end

    test "change_paragraph/1 returns a paragraph changeset" do
      paragraph = paragraph_fixture()
      assert %Ecto.Changeset{} = Services.change_paragraph(paragraph)
    end
  end
end
